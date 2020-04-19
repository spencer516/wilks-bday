import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency-decorators';
import { action } from '@ember/object';
import loadImage from '../utils/load-image';

export default class QuestionComponent extends Component {
  @tracked chosenIndex = null;

  constructor(...args) {
    super(...args);
    this.loadImages.perform();
  }

  get answerAttempted() {
    return this.chosenIndex !== null;
  }

  get answerIsCorrect() {
    const { answerOptions } = this.args.question;
    return answerOptions.includes(this.chosenIndex);
  }

  @task
  *loadImages() {
    const urls = this.args.question.images;
    const promises = [];

    for (const url of urls) {
      promises.push(loadImage(url));
    }

    yield Promise.all(promises);
  }

  @action
  confirmModal() {
    if (!this.answerIsCorrect) {
      this.chosenIndex = null;
    } else {
      this.args.onSuccess();
    }
  }

  @action
  chooseQuestion(index) {
    this.chosenIndex = index;
  }
}
