import Controller from '@ember/controller';
import classic from 'ember-classic-decorator';

@classic
export default class TransformiconsRemoveController extends Controller {
  default = false;
  check = false;
  chevronLeft = false;
  chevronRight = false;
  chevronDown = false;
  chevronUp = false;
}
