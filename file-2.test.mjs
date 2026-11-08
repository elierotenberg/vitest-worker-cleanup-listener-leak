import { expect, test } from "vitest";
import { checkPayloadRetention } from "./check.mjs";

test("file 2", () => {
  checkPayloadRetention("file-2");
  expect(true).toBe(true);
});
