import { IResourceProvider } from './dform-resource-provider';
import { DForm, DFormControl, Option, HasClassifier, HasControls } from './model/dynamic-form.model';

/**
 * Adds missing referenced resources to the form
 */
export class DFormCompiler {

  constructor(private resourceProvider: IResourceProvider) { }

  compile(form: DForm): DForm {
    this.compileControl(form);
    return form;
  }

  private compileControl(control: HasControls | HasClassifier | DFormControl) {
    if ((<HasClassifier>control).classifierId) {
      (control as any).classifier = this.provideResource((control as any).classifierId);
    }
    if ((<HasControls>control).controls) {
      (<HasControls>control).controls.forEach(c => {
        this.compileControl(c);
      });
    }
  }

  private provideResource(resourceId: string): Option[] {
    return this.resourceProvider.getClassifierById(resourceId);
  }
}
