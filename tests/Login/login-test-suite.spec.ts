import { LoginAction } from "../../action/Login/login-action"
import { BaseAction } from "../../common/Base/base-action"
import {test as base} from '@playwright/test'
import { LoginData } from "../../test-data/Login/testData-login"

type userFixture = {
    base: BaseAction,
    loginAction: LoginAction
}

export const TestLoginFeature = base.extend<userFixture>({
    base: async ({page}, use) => {
        await use(new BaseAction(page))
    },
    loginAction: async ({page}, use) => {
        await use(new LoginAction(page))
    }
});

// Posive Test Case
TestLoginFeature("Test Case 1: Verify user is navigated to login page", async ({base, loginAction}) => {
    await base.navigateLoginPage();
    await loginAction.verifyTitleLoginPage(LoginData.loginPageTitle);
});

// Posive Test Case
TestLoginFeature("Test Case 2: Verify user is displayed with username and password text field in the login page", async ({base, loginAction}) => {
    await base.navigateLoginPage();
    await loginAction.verifyLoginPageElement()
});

// Negative Test Case
TestLoginFeature("Test Case 3: Verify user is displayed with error message when clicked on Submit button without entering username and password", async ({base, loginAction}) => {
    await base.navigateLoginPage();
    await loginAction.verifySubmitError(LoginData.blankErrorMsg);
});

// Negative Test Case
TestLoginFeature("Test Case 4: Verify user is displayed with error message when clicked on Submit button without entering username", async ({base, loginAction}) => {
    await base.navigateLoginPage();
    await loginAction.verifyPasswordData(LoginData.validCred);
    await loginAction.verifySubmitError(LoginData.blankErrorMsg);
});

// Negative Test Case
TestLoginFeature("Test Case 5: Verify user is displayed with error message when clicked on Submit button without entering password", async ({base, loginAction}) => {
    await base.navigateLoginPage();
    await loginAction.verifyUserNameData(LoginData.validCred);
    await loginAction.verifySubmitError(LoginData.invalidPassMsg);
});

// Negative Test Case
TestLoginFeature("Test Case 6: Verify user is displayed with error message when clicked on Submit button with Invalid Password", async ({base, loginAction}) => {
    await base.navigateLoginPage();
    await loginAction.verifyUserNameData(LoginData.validCred);
    await loginAction.verifyPasswordData(LoginData.inValidCred);
    await loginAction.verifySubmitInvalidCred(LoginData.invalidPassMsg);
});

// Negative Test Case
TestLoginFeature("Test Case 7: Verify user is displayed with error message when clicked on Submit button with Invalid UserName", async ({base, loginAction}) => {
    await base.navigateLoginPage();
    await loginAction.verifyUserNameData(LoginData.inValidCred);
    await loginAction.verifyPasswordData(LoginData.validCred);
    await loginAction.verifySubmitInvalidCred(LoginData.blankErrorMsg);
});