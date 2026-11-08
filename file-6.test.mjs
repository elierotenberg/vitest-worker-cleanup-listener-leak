import { expect, test } from "vitest";
import { checkPayloadRetention } from "./check.mjs";

test("file 6", () => {
  checkPayloadRetention("file-6");
  expect(true).toBe(true);
});
