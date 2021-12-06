const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/login.page');
const MainPage = require('../pages/main.page');

const pages = {
    login: LoginPage,
    main: MainPage,
}

Given(/^user open the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^user enter credentials \(username: (\w+), password: (.+)\)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^validation message appears (.*)$/, async (message) => {
    await LoginPage.alertMessage(message).waitForDisplayed();
});

When(/click login as guest button/, async () => {
    await LoginPage.loginAsGuestButton.click()
})

When(/^user enter credentials \(username: (\w+), password: (.+)\) on main page$/, async (username, password) => {
    await MainPage.login(username, password);
});

Then(/(\w+) page is displayed/, async (page) => {
    await pages[page].inputUsername.waitForDisplayed()
    await pages[page].inputPassword.waitForDisplayed()
})

Then(/^debug$/, async () => {
    await browser.debug()
});

Then(/^all main page blocks are displayed$/, async () => {
    await MainPage.loginBlock.waitForDisplayed()
    await MainPage.resentActivityBlock.waitForDisplayed()
    await MainPage.tagsBlock.waitForDisplayed()
    await MainPage.usersOnlineBlock.waitForDisplayed()
    await MainPage.calendarBlock.waitForDisplayed()
});

