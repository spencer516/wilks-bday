import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProceedPageRoute extends Route {
  @service pageLoader;

  model({ id }) {
    return this.pageLoader.loadPage(id);
  }
}
