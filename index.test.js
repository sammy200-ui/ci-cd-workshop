const makeBiryani = require('./index');

test('Biryani should be delicious', () => {
  expect(makeBiryani()).toBe("Delicious Biryani");
});
