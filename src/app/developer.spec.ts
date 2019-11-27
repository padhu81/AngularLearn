import { Developer } from './developer';

describe('Developer', () => {
  it('should create an instance', () => {
    expect(new Developer(1,"jas","min","java",2019)).toBeTruthy();
  });
});
