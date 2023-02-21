import { Browser } from "../framework/helpers/browser";
import { DriverManager } from "../framework/helpers/driverManager";
import { PageFactory } from "../pageObject/pageFactory/pageFactory";
import { Pages } from "../pageObject/pageFactory/pages";



describe('Exchange rates', () => {
    
    beforeEach(async () => {
         DriverManager.startDriver;
        await Browser.goTo("https://www.onliner.by/");
    })
    afterAll(async () => {
        await DriverManager.quitDriver();
    })

    it('Find elment "Лучшие курсы валют', async() =>{
        const mainPage = PageFactory.getPage(Pages.mainPage);
        await mainPage.buttonBestExchangeRates.click();
        const bestExchangeRatesEle = PageFactory.getPage(Pages.bestExchangeRates);
        const actualResult = await bestExchangeRatesEle.TextTitle.getText();
        console.log(actualResult);
        const expectResult = 'Лучшие курсы валют'
        expect(actualResult).toBe(expectResult)
    })

     it('Page title text ', async() =>{
        const mainPage = PageFactory.getPage(Pages.mainPage);
       
        await mainPage.buttonBestExchangeRates.click();
        const bestExchangeRatesEle = PageFactory.getPage(Pages.bestExchangeRates);
        const actualResult = await bestExchangeRatesEle.TextTitltConverter.getText()
        console.log(actualResult);
        const expectResult = "Конвертер валют по лучшим курсам"
        expect(actualResult).toContain(expectResult)
    })

    it('Currency envelope. Sell $50', async() =>{
        const mainPage = PageFactory.getPage(Pages.mainPage);
        await mainPage.buttonBestExchangeRates.click();
        const bestExchangeRatesEle = PageFactory.getPage(Pages.bestExchangeRates)
        await bestExchangeRatesEle.enterTheAmount.clearAndType('50');
        const searchPopup = PageFactory.getPage(Pages.bestExchangeRates)
        const actualResult = await searchPopup.resultBy.getText();
        expect(actualResult).toContain('132');
    })  
 
    it('Currency envelope. Buy $50', async() =>{
        const mainPage = PageFactory.getPage(Pages.mainPage);
        await mainPage.buttonBestExchangeRates.click();
        const bestExchangeRatesEle = PageFactory.getPage(Pages.bestExchangeRates)
        await bestExchangeRatesEle.buttonBuy.click()
        await bestExchangeRatesEle.enterTheAmount.clearAndType('60');
        const searchPopup = PageFactory.getPage(Pages.bestExchangeRates)
        const actualResult = await searchPopup.resultBy.getText();
        expect(actualResult).toContain('159');
    })  

    it('Currency abbreviation', async() =>{
        const mainPage = PageFactory.getPage(Pages.mainPage);
        await mainPage.buttonBestExchangeRates.click();
        const bestExchangeRatesEle = PageFactory.getPage(Pages.bestExchangeRates);
        const actualResult = await bestExchangeRatesEle.TextAbbr.getText()
        console.log(actualResult);
        const expectResult = '1 USD'
        expect(actualResult).toBe(expectResult)
    })


    it('The logo on the currency exchange rate page - "alt"', async() =>{
        const mainPage = PageFactory.getPage(Pages.mainPage);
        await mainPage.buttonBestExchangeRates.click();
        const bestExchangeRatesEle = PageFactory.getPage(Pages.bestExchangeRates);
        const actualResult = await bestExchangeRatesEle.PageLogo.getAttribute('alt')
        console.log(actualResult);
        const expectResult = "Onlíner"
        expect(actualResult).toContain(expectResult)
    })

    it('The logo on the currency exchange rate page - "width"', async() =>{
        const mainPage = PageFactory.getPage(Pages.mainPage);
        await mainPage.buttonBestExchangeRates.click();
        const bestExchangeRatesEle = PageFactory.getPage(Pages.bestExchangeRates);
        const actualResult = await bestExchangeRatesEle.PageLogo.getAttribute('width')
        console.log(actualResult);
        const expectResult = "180"
        expect(actualResult).toContain(expectResult)
    })

     it('The logo on the currency exchange rate page - "height"', async() =>{
        const mainPage = PageFactory.getPage(Pages.mainPage);
        await mainPage.buttonBestExchangeRates.click();
        const bestExchangeRatesEle = PageFactory.getPage(Pages.bestExchangeRates);
        const actualResult = await bestExchangeRatesEle.PageLogo.getAttribute('height')
        console.log(actualResult);
        const expectResult = "45"
        expect(actualResult).toContain(expectResult)
    })
})

  
 