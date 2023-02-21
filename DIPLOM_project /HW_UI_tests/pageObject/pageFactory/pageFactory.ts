import { BestExchangeRates } from "../pages/bestExchangeRates";
import { MainPage } from "../pages/mainPage";
import { Pages } from "./pages";

export class PageFactory {
    public static getPage(pageName: Pages.mainPage): MainPage;
    public static getPage(pageName: Pages.bestExchangeRates): BestExchangeRates;

    public static getPage(pageName: Pages) {
        switch (pageName) {
            case Pages.bestExchangeRates:
                return new BestExchangeRates()
            case Pages.mainPage:
                return new MainPage()
            default:
                throw new Error(`Page factory is not implemented for ${pageName}`)
                    }
    }
} 