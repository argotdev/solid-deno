// api/routeStaticFilesFrom.ts
import { Context, Next } from "@oak/oak";

export function routeStaticFilesFrom(staticPaths: string[]) {
  return async (context: Context, next: Next) => {
    for (const path of staticPaths) {
      try {
        await context.send({ root: path, index: "index.html" });
        return;
      } catch {
        continue;
      }
    }
    await next();
  };
}
