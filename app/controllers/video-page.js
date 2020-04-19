import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class VideoPageController extends Controller {
  @action
  videoFinished() {
    const nextPage = this.model.nextPage;

    this.transitionToRoute(`${nextPage.pageType}-page`, nextPage.id);
  }
}
