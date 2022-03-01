TechStart.dev. WebDriverIO in two hours.

---
## Prerequisites:
1. [Node.js](https://youtu.be/dUEHCy9gDYQ)
2. [VS Code](https://youtu.be/TjNZKtAHyA4)
3. [Python](https://youtu.be/-hq23wpsnjY)
5. Install or Update [Chrome browser](https://www.google.com/chrome/), so you have the latest version.

---
## 1. Preparation:
1. Create a folder for storing the Automation project and open it with VS Code:
  - `File => Open Folder`

2. Open Terminal:
  - `Terminal => New Terminal`

## 2. WebDriverIO installation and initial configuration.
1. Initialize Node.js project:
````
npm init -y
````

2. Install WDIO CLI:
````
npm install @wdio/cli
````

3. Launch initial configuration guide:
````
npx wdio config
````
and select/specify the following options:
- select `On my local machine`
- select `mocha`
- select `Babel`
- type `./test/*.js`
- type `N`
- select `spec`
- don't select anything, just press `Enter`
- select `chromedriver`
- type `https://free-courses-client-prod.herokuapp.com/`
- Type `Y`

Wait till the end of the installation.

4. Create `test` folder and then `test.js` file in `test` folder. Paste the following code into the file:
````
describe('Page', () => {

    before(async function () {
        await browser.url('/');
    })

    it('Title', async function () {
        await expect(browser).toHaveTitle('TechStart')
    })

    it('URL', async function () {
        await expect(browser).toHaveUrl('https://free-courses-client-prod.herokuapp.com/line/patient')
    })

})
````

5. Run your firts test:
````
npx wdio run ./wdio.conf.js
````

6. Replace `test` script in `package.json` by:
````
"test": "npx wdio run ./wdio.conf.js"
````
Now you can trigger the test by running `npm run test`.

7. Use [WebDriverIO API reference](https://webdriver.io/docs/api) to add more `browser` and `element` methods as well as `expect` validations.

8. Use [Jest's Expect library](https://jestjs.io/docs/expect) to add more `expect` validations.

9. Use [CSS Selectors guide](https://dev.to/neutrino2211/using-css-selectors-in-javascript-3hlm) to find elements on a page.

10. Few common WebDriverIO commands to use:
````
browser.url('url')
$('selector').click()
$('selector').setValue('value')
$('selector').waitForDisplayed()
$('selector').waitForDisplayed({ reverse: true })
expect(browser).toHaveUrl('expected-url')
expect(browser).toHaveTitle('expected-title')
expect($('selector')).toBeDisplayed()
expect($('selector')).toHaveAttribute('attributeName', 'value')
expect($('selector')).toHaveText('expected-value')
expect($('selector')).toHaveTextContaining('expected-value')
expect(value).toEqual(expected)
````
