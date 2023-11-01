describe('Android Native Feature Test', () => {

    it('Access an Activity directly', async () => {
        //access activity
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples');

        //pause
        await driver.pause(3000);

        //assertion
        //const title = await $('android.widget.TextView');
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })
    it('Working with Dialog Boxes', async () => {
        //access to CTIVITY
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples');

        //click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        //acept alert
        //await driver.acceptAlert();

        //dismiss  alert
        //await driver.dismissAlert();

        //get alert text
        const texto = await $('android.widget.TextView');
        console.log('======================= AQUI ESTA EL TEXTO =================== ' , await driver.getAlertText());
        await driver.pause(3000);
        await expect(texto).toHaveText('Lorem ipsum dolor sit aie consectetur adipiscing \tPlloaso mako nuto siwuf cakso dodtos anr koop.');


    
        //click on the Ok button
        await $('//*[@resource-id="android:id/button1"]').click();
        await driver.pause(3000);

        //click on the Cancel button
        //await $('//*[@resource-id="android:id/button2"]').click();
        //await browser.pause(3000);


        //assertion -alert box is no longer visible
        await expect('//*[@resource-id="android:id/alertTitle"]').not.toExist();
    })
    it('Vertical Scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        //scroll to the end (not stable if element gets moved)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        //await $('~Secure Surfaces').click();

        // scrollTextIntoView = more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        //assertion
        await expect($('~Secure Dialog')).toExist();
    })
    it('Horizontal scrolling', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
        await driver.pause(3000);
    })
    it.only('Working with a date picker', async () => {
        //access the date picker
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1");
        await driver.pause(3000);
        //get current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();

        // click on change the date button
        await $('~change the date').click();

        //scroll right to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        //select the 10th date
        await $('//*[@text="10"]').click();

        //click on Ok button
        await $('//*[@resource-id="android:id/button1"]').click();

        //verify the updated date
        await expect(await date.getText()).not.toEqual(currentDate);
    })
    
})