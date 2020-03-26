const fastify = require("fastify")({
  logger: true
});

fastify.get("/ok", (_req, res) => {
  res.code(200).send({
    status: `ok`
  });
});

fastify.get("/not-ok", (_req, res) => {
  res.code(502).send({
    status: `not ok`
  });
});

fastify.listen(8080, (err, addr) => {
  fastify.log.info(`server listening at ${addr}`);
});
