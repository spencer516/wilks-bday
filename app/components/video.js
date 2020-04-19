import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency-decorators';
import { action } from '@ember/object';
import Player from '@vimeo/player';

function waitForEvent(player, event) {
  return new Promise(resolve => {
    player.on(event, (res) => {
      resolve(res);
      player.off(event);
    });
  });
}

export default class VideoComponent extends Component {
  player = null;

  @tracked hideVideo = true;

  @task
  *loadVideo() {
    yield waitForEvent(this.player, 'loaded');

    this.hideVideo = false;

    yield this.player.play().catch(() => { });

    while (true) {
      yield waitForEvent(this.player, 'ended');
      this.args.onFinish();
    }
  }

  @action
  setupPlayer(id, iframe) {
    this.player = new Player(iframe, { id, playsinline: true });
    this.loadVideo.perform(id, iframe).catch(() => { });
  }
}
