from http.server import HTTPServer, BaseHTTPRequestHandler
from pathlib import Path
PAGE = Path(__file__).resolve().parents[1] / 'dist' / 'azimut-spbs.html'
class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path.split('?')[0] not in ('/', '/index.html', '/azimut-spbs.html'):
            self.send_error(404)
            return
        data = PAGE.read_bytes()
        self.send_response(200)
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        self.send_header('Content-Length', str(len(data)))
        self.end_headers()
        self.wfile.write(data)
HTTPServer(('127.0.0.1', 4173), Handler).serve_forever()
