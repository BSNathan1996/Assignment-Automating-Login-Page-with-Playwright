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

    // function to verify title of login page
    public async verifyTitleLoginPage(testData: Dictionary<string>){
        const title = await this.page.title();
        await expect(title).toBe(testData.title);
    }

    // function to enter Username data in the username field
    public async verifyUserNameData(testData: Dictionary<string>){
        const userNameTextBox = await this.page.locator(loginViews.userNameTextBox);
        await expect(userNameTextBox).toBeVisible();
        userNameTextBox.fill(testData.username);
    }

    // function to enter Password data in the password field
    public async verifyPasswordData(testData: Dictionary<string>){
        const passwordTextBox = await this.page.locator(loginViews.passwordTextBox);
        await expect(passwordTextBox).toBeVisible();
        passwordTextBox.fill(testData.password);
    }

    // function to click on submit button
    public async verifySubmitButton(){
        const submitButton = await this.page.locator(loginViews.submitButton);
        await submitButton.click();
    }

    // function to get the error msg after click on submit button
    public async verifySubmitError(testData:Dictionary<string>){
        const submitButton = await this.page.locator(loginViews.submitButton);
        await submitButton.click();
        const errorMessage = await this.helper.getText(loginViews.errorMsg);
        console.log(errorMessage)
        await expect(errorMessage).toBe(testData.errMsg);
    }
    
    // function to get the error msg after click on the submit button with invalid credential
    public async verifySubmitInvalidCred(testData: Dictionary<string>){
        const submitButton = await this.page.locator(loginViews.submitButton);
        await submitButton.click();
        const errorMessage = await this.helper.getText(loginViews.errorMsg);
        console.log(errorMessage)
        await expect(errorMessage).toBe(testData.errMsg);
    }

    // function to verify login page elemets
    public async verifyLoginPageElement(){
        await this.helper.isVisible(loginViews.userNameTextBox);
        await this.helper.isVisible(loginViews.passwordTextBox);
        await this.helper.isEnabled(loginViews.submitButton);
    }

    // function to verify success login page title
    public async verifySuccessPageTitle(testData:Dictionary<string>){
        const title = await this.page.title();
        await expect(title).toBe(testData.title);
    }

    // function to verify success login page elements
    public async verifySuccessPageElement(testData: Dictionary<string>){
        await expect(this.page.url()).toBe(testData.successPageURL);
        await this.helper.textMatch(loginSuccessViews.successfullLoginHeaderByClass, testData.header);
        await this.helper.textMatch(loginSuccessViews.successAccoutMsgByClass, testData.msg);
        const logoutBtn = await this.page.locator('a').filter({
            hasText: loginSuccessViews.logoutButtonByText
        });
        await expect(logoutBtn).toBeVisible();
    }

    // function to verify the logout button functionality
    public async verifyLogoutFunctionality(testData: Dictionary<string>){
        const logoutBtn = await this.page.locator('a').filter({
            hasText: loginSuccessViews.logoutButtonByText
        });
        await logoutBtn.click();
        await expect(this.page.url()).toBe(testData.baseUrl);
    }
}