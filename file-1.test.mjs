import { expect, test } from "vitest";
import { checkPayloadRetention } from "./check.mjs";

test("file 1", () => {
  checkPayloadRetention("file-1");
  expect(true).toBe(true);
});
