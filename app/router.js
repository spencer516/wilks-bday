import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('question-page', { path: 'question/:id' });
  this.route('video-page', { path: 'video/:id' });
  this.route('proceed-page', { path: 'proceed/:id' });
});
