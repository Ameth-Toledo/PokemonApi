import { PokemoNamePipe } from './pokemo-name.pipe';

describe('PokemoNamePipe', () => {
  it('create an instance', () => {
    const pipe = new PokemoNamePipe();
    expect(pipe).toBeTruthy();
  });
});
