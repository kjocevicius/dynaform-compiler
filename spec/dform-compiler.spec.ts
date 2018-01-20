import IResourceProvider from '../src/dform-resource-provider';
import DFormCompiler from '../src/dform-compiler';
import { DForm, FIELD_TYPE, DFormControl, DFormFieldOptions, CONTAINER_TYPE, DFormContainer } from 'dform-model';

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

  const mockForm: DForm = {
    formName: 'test',
    formSymbolicName: 'TEST',
    version: '1',
    controls: [
      {
        name: 'c1',
        label: 'c123',
        type: FIELD_TYPE.FIELD_DROPDOWN,
        validators: [],
        classifierId: 'testId'
      } as DFormControl,
      {
        name: 'c2',
        label: 'c123',
        type: CONTAINER_TYPE.CONTAINER,
        validators: [],
        controls: [
          {
            name: 'c3',
            label: 'c123',
            type: FIELD_TYPE.FIELD_DROPDOWN,
            validators: [],
            classifierId: 'testId'
          } as DFormControl
        ]
      } as DFormControl
    ]
  };

  let sut: DFormCompiler;

  beforeEach(() => {
    sut = new DFormCompiler(mockProvider);
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  it('mock form should be empty', () => {
    expect((<DFormFieldOptions>mockForm.controls[0]).classifier).toBeFalsy();
    expect((<DFormFieldOptions>(<DFormContainer>(mockForm.controls[1])).controls[0]).classifier).toBeFalsy();
  });

  it('should build a form', () => {
    const builtForm = sut.compile(mockForm);
    expect((<DFormFieldOptions>builtForm.controls[0]).classifier).toBeTruthy();
    expect((<DFormFieldOptions>(<DFormContainer>(builtForm.controls[1])).controls[0]).classifier).toBeTruthy();
  });

});
