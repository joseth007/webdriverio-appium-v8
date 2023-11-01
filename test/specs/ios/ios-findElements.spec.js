describe('iOS Find Element', () => {

    it('find element by accesibility id', async () =>  {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    })

    it('find by tag name', async () => {
        //single element
        console.log(await $('XCUIElementTypeStaticText').getText());

        //multiple elements
        const textEls = await $$('XCUIElementTypeStaticText');

        for (const element of textEls){
            console.log(await element.getText());
        }
    })

    it('find element by xpath', async () => {
        await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        await $('//XCUIElementTypeStaticText[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    })

    it('find element by class chain', async () => {
        //const alertViews = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
        const alertViews = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
        const simple = '**/XCUIElementTypeStaticText[`label == "Simple"`]'
        await $(`-ios class chain:${alertViews}`).click();
        await $(`-ios class chain:${simple}`).click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    })
    it('find element by predicate string', async () => {
        //const alertViews = 'label == "Alert Views"';
        const alertViews = 'value BEGINSWITH[c] "alert"';
        const simple = 'label == "Simple"'
        await $(`-ios predicate string:${alertViews}`).click();
        await $(`-ios predicate string:${simple}`).click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    })

    // Exercise 
    it('Search Input Field', async () => {
        await $('//XCUIElementTypeStaticText[@name="Search"]').click();
        await $('//XCUIElementTypeStaticText[@name="Default"]').click();
        const searchBar = 'type == "XCUIElementTypeSearchField"';
        await $("XCUIElementTypeSearchField").addValue('I love this course!');
        await driver.pause(3000)
        //const text = await
        //searchBar.getText();
        
        await expect ($( `-ios predicate string:${searchBar}`)).toHaveAttr('value');
    })
})