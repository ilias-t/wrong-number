// Serves index.html on localhost only. The app itself makes zero network requests.
const page = Bun.file(`${import.meta.dir}/index.html`);

const server = Bun.serve({
  hostname: "127.0.0.1",
  port: 4545,
  fetch(req) {
    const { pathname } = new URL(req.url);
    if (req.method === "GET" && (pathname === "/" || pathname === "/index.html")) {
      return new Response(page, { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    return new Response("Wrong number.", { status: 404 });
  },
});

console.log(`Wrong Number is running at http://${server.hostname}:${server.port}`);
