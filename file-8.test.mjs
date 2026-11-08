import { expect, test } from "vitest";
import { checkPayloadRetention } from "./check.mjs";

test("file 8", () => {
  checkPayloadRetention("file-8");
  expect(true).toBe(true);
});
