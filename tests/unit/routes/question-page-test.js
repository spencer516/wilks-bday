import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | question-page', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:question-page');
    assert.ok(route);
  });
});
