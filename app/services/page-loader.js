import Service, { inject as service } from '@ember/service';

export default class PageLoaderService extends Service {
  @service store;

  getRelatedPage(page, relatedKey) {
    const nextPageId = page.belongsTo(relatedKey).id();
    return nextPageId ? this.store.find('page', nextPageId) : null;
  }

  loadRelatedType(page, relatedKey) {
    const ref = page.belongsTo(relatedKey);
    return ref.load();
  }

  async loadFirstPage() {
    const page = await this.store.queryRecord('page', { firstPage: true });
    const nextPage = await this.getRelatedPage(page, 'nextPage');
    const previousPage = await this.getRelatedPage(page, 'previousPage');

    return { page, nextPage, previousPage };
  }

  async loadPage(id, relatedKey) {
    const page = await this.store.findRecord('page', id, { include: relatedKey });
    const nextPage = await this.getRelatedPage(page, 'nextPage');
    const previousPage = await this.getRelatedPage(page, 'previousPage');
    const result = { page, nextPage, previousPage };

    if (relatedKey) {
      const relatedModel = await this.loadRelatedType(page, relatedKey);
      return { ...result, [relatedKey]: relatedModel };
    }

    return result;
  }
}
