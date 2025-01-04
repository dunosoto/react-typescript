
describe('describe', () => {

  test('this test not must fail', () => {
  
    const message = 'hello world';
    const message2 = message.trim();

    expect(message).toBe(message2);
  });
})