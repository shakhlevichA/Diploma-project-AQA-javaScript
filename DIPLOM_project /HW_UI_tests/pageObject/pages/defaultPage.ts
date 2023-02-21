import { By } from "selenium-webdriver";
import { Button } from "../../framework/elements/buttot";
import { TextField } from "../../framework/elements/textField";
import { DriverManager } from "../../framework/helpers/driverManager";

export class DefaultPage {
    protected driver = DriverManager.startDriver
    
    public readonly buttonBestExchangeRates= new Button(By.css('a#moneyRate'));
    public readonly enterTheAmount = new TextField(By.css('input#amount-in'));
  
}