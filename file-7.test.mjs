import { expect, test } from "vitest";
import { checkPayloadRetention } from "./check.mjs";

test("file 7", () => {
  checkPayloadRetention("file-7");
  expect(true).toBe(true);
});
