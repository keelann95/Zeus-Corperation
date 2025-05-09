Bun.serve({
    hostname: "192.168.43.93",
    port: 4395,
    fetch(req) {
      return new Response("Hello from Bun on the network!");
    },
  });
  