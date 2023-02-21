import { DefaultElement } from "./baseElement";

export class TextField extends DefaultElement {
    public async typeText(text: string) {
        await this.waitForIt();
        return this.element.sendKeys(text);
    }

    public async clearAndType(text: string) {
        await this.element.clear();
        await this.typeText(text);
    }
}