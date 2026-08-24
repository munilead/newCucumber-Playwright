import { test } from "@playwright/test";
import { CommonUtils } from "../utils/CommonUtils";
import { After, Before } from "@cucumber/cucumber";

Before(async () => {

    await CommonUtils.startBrowser();

});

After(async () => {

    await CommonUtils.closeBrowser();

});