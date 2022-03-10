import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
import Page from "../pageobjects/page";
import dashboardPage from "../pageobjects/dashboardPage";
import hardwarePage from "../pageobjects/hardwarePage";
import softwarePage from "../pageobjects/softwarePage";
import issuedLicensesPage from "../pageobjects/issuedLicensesPage";
import requestsPage from "../pageobjects/requestsPage";
import aboutPage from "../pageobjects/aboutPage";

const pages = {
  Dashboard: dashboardPage,
  Hardware: hardwarePage,
  Software: softwarePage,
  IssuedLicenses: issuedLicensesPage,
  Requests: requestsPage,
  About: aboutPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
  await browser.pause(2000);
});

Then(/^The title inside body is (.*) on the (\w+) page$/, async (title, page) => {
    const elWithTitleText = await pages[page].titleInsideBody;
    await expect(elWithTitleText).toHaveText(title);
  }
);

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

When(/^I open hardware Hardware Tab$/, async () => {
  // await  AssetManagementPage.hardware.click();
  // await (await HardwareTab.hardware).click();
});

Then(/^I sholud see Add New Hardware Button$/, async () => {
  //await expect(AssetManagementPage.addNewHardwareButton).toHaveText('Add New Hardware');
});
