import { Dictionary } from "../../common/helper";

export class LoginData {


    static readonly validCred: Dictionary<string> = {
        "username": "student",
        "password": "Password123"
    }

    static readonly inValidCred: Dictionary<string> = {
        "username": "admin",
        "password": "Password1234"
    }

    static readonly blankErrorMsg: Dictionary<string> = {
        "errMsg": "Your username is invalid!"
    }
    static readonly invalidPassMsg: Dictionary<string> = {
        "errMsg": "Your password is invalid!"
    }

    static readonly validCredErrorMsg: Dictionary<string> = {
        "validMsg": "Congratulations student. You successfully logged in!"
    }

    static readonly loginPageURL: Dictionary<string> = {
        "baseUrl": "https://practicetestautomation.com/practice-test-login/"
    }

    static readonly loginPageTitle: Dictionary<string> = {
        "title": "Test Login | Practice Test Automation"
    }

    static readonly SuccessPageTitle: Dictionary<string> = {
        "title": "Logged In Successfully | Practice Test Automation"
    }
    
    static readonly successPageElem: Dictionary<string> = {
        "successPageURL": "https://practicetestautomation.com/logged-in-successfully/",
        "header": "Logged In Successfully",
        "msg": `Congratulations ${LoginData.validCred.username}. You successfully logged in!`
    }
}