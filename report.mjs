import { readFileSync } from "node:fs";

// Print the samples by worker, in the order in which each worker ran its files.
const sampleList = readFileSync("retention.log", "utf8")
  .trim()
  .split("\n")
  .map((line) => JSON.parse(line))
  .toSorted((a, b) => a.pid - b.pid || a.previousTasks - b.previousTasks);
for (const { pid, previousTasks, stillAlive, heapUsedMb } of sampleList) {
  console.log(
    `worker ${pid}: previous tasks ${previousTasks}, payload copies still alive ${stillAlive}, heap ${heapUsedMb} MB`,
  );
}
