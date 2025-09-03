import { expect, Page } from "@playwright/test";

export class helper {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async getText(element: string){
        const textOf = await this.page.locator(element).textContent();
        return textOf;
    }

    public async isVisible(element: string){
        const isElementVisible = await this.page.locator(element);
        await expect(isElementVisible).toBeVisible();
    }

    public async isEnabled(element: string){
        const isElementEnabled = await this.page.locator(element);
        await expect(isElementEnabled).toBeEnabled();
    }
}
export interface Dictionary<T> {
    [key: string]: T;
}
