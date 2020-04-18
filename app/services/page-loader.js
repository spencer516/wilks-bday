import Service, { inject as service } from '@ember/service';

export default class PageLoaderService extends Service {
  @service store;

  async loadFirstPage() {
    const page = await this.store.queryRecord('page', { firstPage: true });
    const nextPageId = page.belongsTo('nextPage').id();
    const nextPage = nextPageId ? await this.store.find('page', nextPageId) : null;

    return { page, nextPage };
  }
}
