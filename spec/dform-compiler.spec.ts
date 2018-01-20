import IResourceProvider from '../src/dform-resource-provider';
import DFormCompiler from '../src/dform-compiler';

const mockProvider: IResourceProvider = {
  getClassifierById: (id) => {
    return [
      {
        value: 'usd',
        displayValue: 'USD'
      },
      {
        value: 'eur',
        displayValue: 'EUR'
      }
    ];
  }
};

describe('DFormCompiler simple mock', () => {

  let sut: DFormCompiler;

  beforeEach(() => {
    sut = new DFormCompiler(mockProvider);
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });
});
