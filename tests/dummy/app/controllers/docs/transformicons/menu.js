import Controller from '@ember/controller';
import classic from 'ember-classic-decorator';

@classic
export default class TransformiconsMenuController extends Controller {
  default = false;
  butterfly = false;
  minus = false;
  xCross = false;
  arrowUp = false;
  arrow360Left = false;
  arrowLeft = false;
}
