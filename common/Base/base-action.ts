import { Page } from "@playwright/test";
import { LoginData } from "../../test-data/Login/testData-login";

export class BaseAction {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async navigateLoginPage() {
        await this.page.goto(LoginData.loginPageURL.baseUrl);
        await this.page.waitForLoadState();
    }
}
