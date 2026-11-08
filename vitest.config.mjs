import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globalSetup: ["./global-setup.mjs"],
    isolate: false,
    // With more than one worker, each test file is its own task, and a worker
    // runs several tasks one after another.
    maxWorkers: 2,
    pool: "forks",
    execArgv: ["--expose-gc"],
  },
});
