import { Joke } from './joke';

describe('Joke', () => {
  it('should create an instance', () => {
    expect(new Joke(1,'why did the chicken cross the road?', 'to get to the other side!')).toBeTruthy();
  });
});
