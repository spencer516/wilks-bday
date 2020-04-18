import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  shouldReloadRecord() {
    return false;
  }

  shouldBackgroundReloadRecord() {
    return false;
  }
}
