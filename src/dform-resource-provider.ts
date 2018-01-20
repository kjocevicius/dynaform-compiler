import { Option } from './model/dynamic-form.model';

/**
 * Provides needed resources for compiler
 */
export interface IResourceProvider {
  getClassifierById(id: string): Option[];
}
