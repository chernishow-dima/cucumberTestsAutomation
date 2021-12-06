const Page = require('./page');

const loginBlockSelector = '//section[@data-block="login" and //*[text()="Вход"]]'
const onlineUsersBlockSelector = '//section[@data-block="online_users"]//*[contains(text(), "Пользователей на сайте")]'
const calendarBlockSelector = '//section[@data-block="calendar_month"]//*[contains(text(), "Календарь")]'
const tagsBlockSelector = '//section[@data-block="tags"]//*[contains(text(), "Теги")]'
const resentActivityBlockSelector = '//section[@data-block="recent_activity"]//*[contains(text(), "Последние действия")]'

class MainPage extends Page {
    get loginBlock() {
        return $(loginBlockSelector)
    }

    get usersOnlineBlock() {
        return $(onlineUsersBlockSelector)
    }

    get calendarBlock() {
        return $(calendarBlockSelector)
    }

    get tagsBlock() {
        return $(tagsBlockSelector)
    }

    get resentActivityBlock() {
        return $(resentActivityBlockSelector)
    }

    get inputUsername() {
        return $(`${loginBlockSelector}//*[@id="login_username"]`);
    }

    get inputPassword() {
        return $(`${loginBlockSelector}//*[@id="login_password"]`);
    }

    get loginButton() {
        return $(`${loginBlockSelector}//*[@value="Вход"]`);
    }

    alertMessage(message) {
        return $(`//div[contains(@class, "alert alert-danger") and text()="${message}"]`);
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    open() {
        return super.open('');
    }
}

module.exports = new MainPage();
