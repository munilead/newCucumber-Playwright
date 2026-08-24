import { CommonUtils } from "../utils/CommonUtils";
import configData from "../config/configData.json";

export class LoginPage {

    private by_username = "xpath=//input[@name='txtUserName']";
    private by_password = "xpath=//input[@name='txtPassword']";
    private by_signIn = "xpath=//input[@name='Submit']";
    private by_welcomePage ="text=Welcome krishna";
    private by_logout = "xpath=//a[@text()='Logout']";

    async login(): Promise<void> {

        await CommonUtils.enterValue(
            this.getUsername(),
            configData.username
        );

        await CommonUtils.enterValue(
            this.getPassword(),
            configData.password
        );

        await CommonUtils.clickElement(
            this.getSignIn()
        );
    }

    getUsername(): string {
        return this.by_username;
    }

    getPassword(): string {
        return this.by_password;
    }

    getSignIn(): string {
        return this.by_signIn;
    }

    getWelcomePage(): string {
        return this.by_welcomePage;
    }

    getLogout(): string {
        return this.by_logout;
    }
}