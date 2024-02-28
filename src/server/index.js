const db = require("./config/connection");

const PORT = process.env.PORT || 3001;

db.once("open", () => {
  server.listen({ port: PORT }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
});
