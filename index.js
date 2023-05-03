import Fastify from "fastify";

const fastify = Fastify();
fastify.get("/", (req, reply) => {
  reply.send("calica");
  console.log("okok");
});

fastify.listen({ port: process.env.PORT || 3000 }, (err) => {
  console.log("server is runnning");
});
