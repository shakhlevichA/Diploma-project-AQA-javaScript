import { By, until, WebDriver } from 'selenium-webdriver';
import { DriverManager } from '../helpers/driverManager';

export abstract class DefaultElement {
   
    protected driver : WebDriver = DriverManager.startDriver;

    constructor(private readonly selector: By) {
    }

    protected get element() {
        return this.driver.findElement(this.selector);
    }


  protected get elements() {
    return this.driver.findElements(this.selector);
  }

      public async click(){
         await this.waitForIt();
         return this.element.click()
      }

    public async findElements(){
         await this.waitForIt();
        return this.element.findElements(this.selector)
    }

    public async getAttribute(attributeName: string) {
        await this.waitForIt();
        return this.element.getAttribute(attributeName);
    }
    public async typeText(text: string) {
    await this.waitForIt();
    return this.element.sendKeys(text);
}

    public waitForIt() {
        return this.driver.wait(until.elementIsVisible(this.element));
    } 

    public async getText() {
        await this.waitForIt();
        return this.element.getText();
    }
    
   

    
}

