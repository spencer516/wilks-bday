import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class QuestionController extends Controller {
  @action
  proceed() {
    const nextPage = this.model.nextPage;

    this.transitionToRoute(`${nextPage.pageType}-page`, nextPage.id);
  }
}
