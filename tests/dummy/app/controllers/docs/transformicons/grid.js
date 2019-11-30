import Controller from '@ember/controller';
import classic from 'ember-classic-decorator';

@classic
export default class TransformiconsGridController extends Controller {
  default = false;
  rearrange = false;
  collapse = false;
}
