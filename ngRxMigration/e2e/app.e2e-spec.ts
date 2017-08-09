import { NgRxMigrationPage } from './app.po';

describe('ng-rx-migration App', () => {
  let page: NgRxMigrationPage;

  beforeEach(() => {
    page = new NgRxMigrationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
