import Model, { attr } from '@ember-data/model';

export default class QuestionModel extends Model {
  @attr questionText;
  @attr answerOptions;
  @attr images;
}
