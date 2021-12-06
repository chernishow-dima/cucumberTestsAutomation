module.exports = class Page {
    open(path) {
        return browser.url(`https://moodle.uniyar.ac.ru/${path}`)
    }
}
