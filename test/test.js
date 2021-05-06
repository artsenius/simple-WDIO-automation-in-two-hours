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