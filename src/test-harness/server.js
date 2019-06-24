const app = require("./app");
const port = 5678;

app.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`);
});
