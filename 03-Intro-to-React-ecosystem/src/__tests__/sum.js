import { sum } from "../Dummy/sum";

test("to write our first test case", () => {
  const res = sum(2, 3);
  expect(res).toBe(5);
});
