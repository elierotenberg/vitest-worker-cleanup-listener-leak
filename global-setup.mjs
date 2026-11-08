import { rmSync } from "node:fs";

// A provided value of about 50 MB. Each task receives its own copy.
export const setup = (project) => {
  rmSync("retention.log", { force: true });
  project.provide(
    "payload",
    Array.from({ length: 200_000 }, (_, index) => `value ${index} `.repeat(20)),
  );
};
