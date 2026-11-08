import { expect, test } from "vitest";
import { checkPayloadRetention } from "./check.mjs";

test("file 4", () => {
  checkPayloadRetention("file-4");
  expect(true).toBe(true);
});
