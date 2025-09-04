import { expect, Page } from "@playwright/test";
import { Dictionary, helper } from "../../common/helper";
import { loginSuccessViews, loginViews } from "../../views/Login/login-views";

export class LoginAction {
    readonly page: Page;
    helper: helper

    constructor(page: Page){
        this.page = page;
        this.helper = new helper(page);
    }

    public async verifyTitleLoginPage(testData: Dictionary<string>){
        const title = await this.page.title();
        await expect(title).toBe(testData.title);
    }

    public async verifyUserNameData(testData: Dictionary<string>){
        const userNameTextBox = await this.page.locator(loginViews.userNameTextBox);
        await expect(userNameTextBox).toBeVisible();
        userNameTextBox.fill(testData.username);
    }

    public async verifyPasswordData(testData: Dictionary<string>){
        const passwordTextBox = await this.page.locator(loginViews.passwordTextBox);
        await expect(passwordTextBox).toBeVisible();
        passwordTextBox.fill(testData.password);
    }

    public async verifySubmitButton(){
        const submitButton = await this.page.locator(loginViews.submitButton);
        await submitButton.click();
    }

    public async verifySubmitError(testData:Dictionary<string>){
        const submitButton = await this.page.locator(loginViews.submitButton);
        await submitButton.click();
        const errorMessage = await this.helper.getText(loginViews.errorMsg);
        console.log(errorMessage)
        await expect(errorMessage).toBe(testData.errMsg);
    }

    public async verifySubmitInvalidCred(testData: Dictionary<string>){
        const submitButton = await this.page.locator(loginViews.submitButton);
        await submitButton.click();
        const errorMessage = await this.helper.getText(loginViews.errorMsg);
        console.log(errorMessage)
        await expect(errorMessage).toBe(testData.errMsg);
    }


    public async verifyLoginPageElement(){
        await this.helper.isVisible(loginViews.userNameTextBox);
        await this.helper.isVisible(loginViews.passwordTextBox);
        await this.helper.isEnabled(loginViews.submitButton);
    }

    public async verifySuccessPageTitle(testData:Dictionary<string>){
        const title = await this.page.title();
        await expect(title).toBe(testData.title);
    }

    public async verifySuccessPageElement(testData: Dictionary<string>){
        await expect(this.page.url()).toBe(testData.successPageURL);
        await this.helper.textMatch(loginSuccessViews.successfullLoginHeaderByClass, testData.header);
        await this.helper.textMatch(loginSuccessViews.successAccoutMsgByClass, testData.msg);
        const logoutBtn = await this.page.locator('a').filter({
            hasText: loginSuccessViews.logoutButtonByText
        });
        await expect(logoutBtn).toBeVisible();
    }

    public async verifyLogoutFunctionality(testData: Dictionary<string>){
        const logoutBtn = await this.page.locator('a').filter({
            hasText: loginSuccessViews.logoutButtonByText
        });
        await logoutBtn.click();
        await expect(this.page.url()).toBe(testData.baseUrl);
    }
}