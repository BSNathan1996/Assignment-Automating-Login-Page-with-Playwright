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

    static readonly validCredSuccessPage: Dictionary<string> = {
        "successPage": "https://practicetestautomation.com/logged-in-successfully/"
    }

    static readonly loginPageTitle: Dictionary<string> = {
        "title": "Test Login | Practice Test Automation"
    }

    static readonly SuccessPageTitle: Dictionary<string> = {
        "title": "Logged In Successfully | Practice Test Automation"
    }
    
    static readonly successPageHeader: Dictionary<string> = {
        "header": "Logged In Successfully"
    }

    static readonly successPageAccount: Dictionary<string> = {
        "msg": `Congratulations ${LoginData.validCred.username}. You successfully logged in!`
    }
}