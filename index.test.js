test("DOES NOT bail on toMatchInlineSnapshot()", () => {
  expect(1).toMatchInlineSnapshot(`2`);
  expect(3).toMatchInlineSnapshot(`4`);
});

test("DOES NOT bails on toMatchSnapshot()", () => {
  expect(1).toMatchSnapshot();
  expect(3).toMatchSnapshot();
});

test("bails on toEqual()", () => {
  expect(1).toEqual(2);
  expect(3).toEqual(4);
});
