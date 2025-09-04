import { expect, Page } from "@playwright/test";

export class helper {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // helper function to get the text from the element
    public async getText(element: string){
        const textOf = await this.page.locator(element).textContent();
        return textOf;
    }

    // helper function to verify if the element is visible
    public async isVisible(element: string){
        const isElementVisible = await this.page.locator(element);
        await expect(isElementVisible).toBeVisible();
    }

    // helper function to verify if the element is not disabled
    public async isEnabled(element: string){
        const isElementEnabled = await this.page.locator(element);
        await expect(isElementEnabled).not.toBeDisabled();
    }

    // helper function to match the text
    public async textMatch(element: string, text: string){
        const textOf = await this.page.locator(element);
        await expect(textOf).toHaveText(text);
    }
}

// an interface to declare a Dictionary data type which accepts Generics<T> values
export interface Dictionary<T> {
    [key: string]: T;
}