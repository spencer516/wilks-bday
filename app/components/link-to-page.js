import Component from '@glimmer/component';

export default class LinkToPageComponent extends Component {
  get pageRoute() {
    const { pageType } = this.args.page;
    return `${pageType}-page`;
  }
}
