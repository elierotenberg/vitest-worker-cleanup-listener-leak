import { expect, test } from "vitest";
import { checkPayloadRetention } from "./check.mjs";

test("file 3", () => {
  checkPayloadRetention("file-3");
  expect(true).toBe(true);
});
