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