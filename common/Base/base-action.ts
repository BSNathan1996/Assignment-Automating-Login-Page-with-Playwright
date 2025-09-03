import { Page } from "@playwright/test";

export class BaseAction {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async navigateLoginPage() {
        await this.page.goto("https://practicetestautomation.com/practice-test-login/");
        await this.page.waitForLoadState();
    }
}
