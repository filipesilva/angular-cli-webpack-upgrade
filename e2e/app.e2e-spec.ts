import { AngularCliWebpackUpgradePage } from './app.po';

describe('angular-cli-webpack-upgrade App', function() {
  let page: AngularCliWebpackUpgradePage;

  beforeEach(() => {
    page = new AngularCliWebpackUpgradePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
