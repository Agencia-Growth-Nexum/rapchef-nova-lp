#!/usr/bin/env python3
"""Servidor estático de pré-visualização para a build de produção (dist/).

Uso: python3 serve.py [porta]   (padrão: 8000)
Serve dist/ com gzip, security headers e cache-control adequados.
"""
import gzip
import io
import mimetypes
import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dist")

# MIME corrections
mimetypes.add_type("image/svg+xml", ".svg")
mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("video/mp4", ".mp4")
mimetypes.add_type("image/webp", ".webp")

IMMUTABLE_PREFIXES = ("/_astro/", "/imagens/", "/fonts/")

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def end_headers(self):
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("X-Frame-Options", "DENY")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        super().end_headers()

    def guess_type(self, path):
        base, _ = os.path.splitext(path)
        if base.endswith(".svg"):
            return "image/svg+xml"
        return super().guess_type(path)

    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            self.path = "/"
            path = os.path.join(ROOT, "index.html")
        elif not os.path.exists(path):
            self.path = "/"
            path = os.path.join(ROOT, "index.html")

        if os.path.splitext(path)[1] in (".html", ".js", ".css", ".svg", ".json", ".xml", ".txt", ".webp"):
            try:
                with open(path, "rb") as f:
                    data = f.read()
                gz = gzip.compress(data, 6)
                ctype = self.guess_type(path)
                self.send_response(200)
                self.send_header("Content-Type", ctype)
                self.send_header("Content-Encoding", "gzip")
                self.send_header("Content-Length", str(len(gz)))
                if any(path.startswith(ROOT + p) for p in IMMUTABLE_PREFIXES):
                    self.send_header("Cache-Control", "public, max-age=31536000, immutable")
                else:
                    self.send_header("Cache-Control", "no-cache")
                self.end_headers()
                self.wfile.write(gz)
                return None
            except OSError:
                pass

        return super().send_head()

    def do_GET(self):
        self.send_head()

    def log_message(self, format, *args):
        sys.stderr.write("[serve] %s\n" % (format % args))

if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    server = ThreadingHTTPServer(("0.0.0.0", port), Handler)
    print(f"Serving {ROOT} on http://0.0.0.0:{port}")
    server.serve_forever()
