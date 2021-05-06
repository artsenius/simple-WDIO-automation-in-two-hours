TechStart.dev. WebDriverIO in two hours.

---
## Prerequisites:
1. [Node.js](https://youtu.be/dUEHCy9gDYQ)
2. [VS Code](https://youtu.be/TjNZKtAHyA4)
3. [Python](https://youtu.be/-hq23wpsnjY)
5. Install/Update [Chrome browser](https://www.google.com/chrome/) to the latest version

---
## 1. Preparation:
1. Create a folder for storing the Automation project and open it with VS Code:
  - `File => Open` on Mac
  - `File => Open Folder` on Windows

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
- select `chromedriver`
- type `https://free-courses-client-prod.herokuapp.com/`

Wait till the end of the installation.

4. Install Sync WDIO module:
```
npm i @wdio/sync
```

5. Create `test` folder and then `test.js` file in `test` folder. Paste the following code into the file:
````
describe('Page', () => {

    it('Title', () => {
        browser.url('/');
        const title = browser.getTitle();
        console.log('Title is: ' + title);
    })

    it('URL', () => {
        const URL = browser.getUrl();
        console.log('URL is: ' + URL);
    })

})
````

6. Run your firts test:
````
npx wdio run ./wdio.conf.js
````

7. Replace `test` script in `package.json` by:
````
"test": "npx wdio run ./wdio.conf.js"
````
Now you can trigger the test by running `npm run test` or `npm test` or `npm t`.

8. Use [WebDriverIO API reference](https://webdriver.io/docs/api) to add more method and `expect` validations.

9. Use [Jest's Expect library](https://jestjs.io/docs/expect) to add more `expect` validarions.

10. Few common commands to use:
````
browser.url('url')
$('selector').click()
$('selector').setValue('value')
$('selector').waitForDisplayed({ reverse: true })
expect(browser).toHaveUrl('expected-url')
expect($('selector')).toBeDisplayed()
expect($('selector')).toHaveAttribute('attributeName', 'value')
expect($('selector')).toHaveText('expected-value')
expect($('selector')).toHaveTextContaining('expected-value')
````