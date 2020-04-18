import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class VideoPageRoute extends Route {
  @service pageLoader;

  model({ id }) {
    return this.pageLoader.loadPage(id, 'video');
  }
}
