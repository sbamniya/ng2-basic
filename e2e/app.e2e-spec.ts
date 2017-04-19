import { NewProPage } from './app.po';

describe('new-pro App', function() {
  let page: NewProPage;

  beforeEach(() => {
    page = new NewProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
