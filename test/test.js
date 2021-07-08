describe('Page', () => {

    before(() => {
        browser.url('/');
    })

    it('Title', () => {
        expect(browser).toHaveTitle('TechStart')
    })

    it('URL', () => {
        expect(browser).toHaveUrl('https://free-courses-client-prod.herokuapp.com/line/patient')
    })

})