import Model, { attr, belongsTo } from '@ember-data/model';

export default class PageModel extends Model {
  @attr('string') pageType;
  @belongsTo('page') previousPage;
  @belongsTo('page') nextPage;
}
