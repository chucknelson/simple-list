import { SimpleListPage } from './app.po';

describe('simple-list App', function() {
  let page: SimpleListPage;

  beforeEach(() => {
    page = new SimpleListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
