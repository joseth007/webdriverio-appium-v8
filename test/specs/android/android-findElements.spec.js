describe('Android Elements Test',() => {
    
    it('Find element by accesibility id', async() => {
        //find element by accesibility id
        const appOption = await $('~App');
        //click on element
        await appOption.click();
        //assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });

    it('Find element by class name', async() => {
        // find elemtn by class name
        const className = await $('android.widget.TextView');

        await expect(className).toHaveText("API Demos");
    });

    it('Find elements by Xpath', async () => {
        //xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        //find by resourceId
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
        //find by text
        await $('//android.widget.TextView[@text="Command two"]').click();
        //find by class
        const texto = await $('android.widget.TextView');
        await expect(texto).toHaveText("You selected: 1 , Command two");
  
    })

    it('Find elements by UIAutomator', async () => {
        // find by text contains
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    it('Find all the text of main screen', async () => {
        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views'
        ];
        const actualList = [];

        //find multiple elements
        const elements = await $$('android.widget.TextView');
        //loop through them
        
        for (const element of elements){
            actualList.push(await element.getText());
        }

        //Only for validate the items
        var i = 1;
        for await (const element of elements){
            console.log('El elemento numero ' + i + ' es: ' + await element.getText());
            i++;
        }
        await expect(actualList).toEqual(expectedList);
    });

    it('Send keys on input text', async () => {
        //find text by ID
        await $('~Views').click();
        await $('//*[@text="Auto Complete"]').click();
        await $('//android.widget.TextView[@content-desc="1. Screen Top"]').click();
        //enter the country name
        const textField =  await $('android.widget.AutoCompleteTextView');
        await textField.addValue('Costa Rica');

        //verify the country name

        const texto = await $('android.widget.AutoCompleteTextView');
        await expect(texto).toHaveText('Costa Rica');
    })
})