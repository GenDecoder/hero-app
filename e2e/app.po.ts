import { browser, element, by } from 'protractor';

export class HeroAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ho-root h1')).getText();
  }
}
