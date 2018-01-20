import { Option } from 'dynaform-model';


/**
 * Provides needed resources for compiler
 */
export default interface IResourceProvider {
  getClassifierById(id: string): Option[];
}
