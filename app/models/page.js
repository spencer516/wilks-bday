import Model, { attr, belongsTo } from '@ember-data/model';

export default class PageModel extends Model {
  @attr('string') pageType;
  @attr('string') pageTitle;
  @attr('string') pageText;
  @attr('string') proceedText;
  @attr('boolean') isFirstPage;
  @belongsTo video;
  @belongsTo question;

  @belongsTo('page', { inverse: 'nextPage' }) previousPage;
  @belongsTo('page', { inverse: 'previousPage' }) nextPage;
}
