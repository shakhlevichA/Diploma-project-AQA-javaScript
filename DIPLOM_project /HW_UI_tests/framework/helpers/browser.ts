
import {DriverManager} from "./driverManager";
import {WebDriver} from "selenium-webdriver";

export class Browser  {
    private static driver: WebDriver =  DriverManager.startDriver;
    public static goTo (page: string)  {
        return this.driver.get(page);
    }
    public static get closeBrowser () {
        return this.driver.close();
    }
    
}
