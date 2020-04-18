import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  nextPage: belongsTo('page', { inverse: 'previousPage' }),
  previousPage: belongsTo('page', { inverse: 'nextPage' }),
  video: belongsTo(),
  question: belongsTo(),
});
