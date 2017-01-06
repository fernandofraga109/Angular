import {Dao} from './dao';
import { Animal} from '../aula07-classes/animal';
import { Cavalo} from '../aula07-classes/cavalo';

let dao: Dao<Animal> = new Dao<Animal>();

dao.insert(new Animal('Rex Generics'));
dao.insert(new Cavalo('Cavalo pede pano Generics'));