import koa from 'koa';
import {lib1} from "@nx-node-demo/lib1";
import {lib2} from "@nx-node-demo/lib2";

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = new koa();

app.use(async (ctx) => {
  ctx.body = {message: 'Hello API', lib1: lib1(), lib2: lib2()};
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
