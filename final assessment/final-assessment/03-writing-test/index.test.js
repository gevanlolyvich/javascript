import { sum } from "./index.js";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("calculator", () => {
  it("should sum correct", () => {
    const a = 1;
    const b = 2;

    const actualValue = sum(a, b);

    const expectedValue = 3;
    assert.equal(actualValue, expectedValue);
  });
});
