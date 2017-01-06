import { AnimalDao} from './animal-dao';
import { DaoInterface} from './dao.interface';
import { Animal} from '../aula07-classes/animal';

let dao: DaoInterface = new AnimalDao();
let animal: Animal = new Animal('Rex run');

dao.insert(animal);