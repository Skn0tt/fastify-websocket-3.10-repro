"use strict";

const fastify = require("fastify")();

fastify.register(require("fastify-websocket"));

fastify.register(
  (fastify, opts, done) => {
    fastify.get("/", { websocket: true }, (connection, req) => {
      connection.socket.send("This works");
    });

    done();
  },
  { prefix: "/activity" }
);

fastify.listen(3000, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
