import { By } from 'selenium-webdriver';
import { DefaultPage } from './defaultPage';
import { TextLabel } from '../../framework/elements/textLabel';
export class BestExchangeRates extends DefaultPage {
   
    
    public readonly TextTitle = new TextLabel(By.css('div.b-currency-main__top h1')).waitForIt()
    public readonly resultBy = new TextLabel(By.css('b.js-cur-result')).waitForIt()
    public readonly TextAbbr = new TextLabel(By.css('.abbr.rate')).waitForIt()
    public readonly TextTitltConverter = new TextLabel(By.css('.title b')).waitForIt()
    public readonly PageLogo = new TextLabel(By.css('img.onliner_logo')).waitForIt()
    public readonly buttonBuy = new TextLabel(By.css('.state-2')).waitForIt()
    
} 
