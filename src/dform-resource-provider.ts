import { Option } from 'dform-model';


/**
 * Provides needed resources for compiler
 */
export default interface IResourceProvider {
  getClassifierById(id: string): Option[];
}
