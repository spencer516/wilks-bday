import Model, { attr, belongsTo } from '@ember-data/model';

export default class PageModel extends Model {
  @attr('string') pageType;
  @attr('boolean') isFirstPage;
  @belongsTo('page', { inverse: 'nextPage' }) previousPage;
  @belongsTo('page', { inverse: 'previousPage' }) nextPage;
}
