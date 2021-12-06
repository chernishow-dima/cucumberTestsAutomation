

const Page = require('./page');

class LoginPage extends Page {
    get inputUsername() {
        return $('//*[@id="username"]');
    }

    get inputPassword() {
        return $('//*[@id="password"]');
    }

    get loginButton() {
        return $('//*[@id="loginbtn"]');
    }

    get loginAsGuestButton() {
        return $('//*[text()="Зайти гостем"]');
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
        return super.open('login');
    }
}

module.exports = new LoginPage();
