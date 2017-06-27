import { RecepiesPage } from './app.po';

describe('Recepies App', () => {
  let page: RecepiesPage;

  beforeEach(() => {
    page = new RecepiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
