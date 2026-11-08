import { expect, test } from "vitest";
import { checkPayloadRetention } from "./check.mjs";

test("file 5", () => {
  checkPayloadRetention("file-5");
  expect(true).toBe(true);
});
