import { appendFileSync } from "node:fs";
import { inject } from "vitest";

// The worker keeps `globalThis` between files because `isolate` is false.
globalThis.payloadRefList ??= [];

export const checkPayloadRetention = (file) => {
  gc();
  const stillAlive = globalThis.payloadRefList.filter((ref) => ref.deref()).length;
  appendFileSync(
    "retention.log",
    `${JSON.stringify({
      pid: process.pid,
      file,
      previousTasks: globalThis.payloadRefList.length,
      stillAlive,
      heapUsedMb: Math.round(process.memoryUsage().heapUsed / 2 ** 20),
    })}\n`,
  );
  globalThis.payloadRefList.push(new WeakRef(inject("payload")));
};
