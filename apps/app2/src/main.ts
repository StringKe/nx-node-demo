import express from 'express';
import {lib1} from "@nx-node-demo/lib1";
import {lib2} from "@nx-node-demo/lib2";

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3001;

const app = express();

app.get('/', (req, res) => {
  res.send({
    message: 'Hello API',
    lib1: lib1(),
    lib2: lib2()
  });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
