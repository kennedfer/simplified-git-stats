import Fastify from "fastify";

const fastify = Fastify();
fastify.get("/", (req, reply) => {
  reply.send("calica");
  console.log("okok");
});

fastify.listen({ port: process.env.PORT || 3000 }, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("server is runnning");
});
