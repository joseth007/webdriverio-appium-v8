describe('iOS Native Features', () => {

    it('Working with alert views', async () =>  {
        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();
        
        // CLICK OK
        //await $('~OK').click

        //accept/dismis alert
        //await driver.dismissAlert();
        console.log(await driver.getAlertText());
        await driver.acceptAlert();

        //ASSERTION

        await expect ($('~OK')).not.toExist();
    })

    it('Working with Scrollable elements', async () => {
        // await driver.execute('mobile: scroll', {direction: "down"});
        // await driver.execute('mobile: scroll', {direction: "up"});

        //complex
        await $('~Picker View').click();
        const redPicker = await $('~Red color component value');
        const greenPicker = await $('~Green color component value');
        const bluePicker = await $('~Blue color component value');
        await driver.execute('mobile: scroll', {element: redPicker.elementId, direction: "down"});
        await driver.execute('mobile: scroll', {element: greenPicker.elementId, direction: "down"});
        await driver.execute('mobile: scroll', {element: bluePicker.elementId, direction: "down"});

        await driver.pause(5000)
        //await driver.execute('mobile: scroll', {direction: "up"});
    })

    it.only('Working with Picker View', async () => {
        
        await $('~Picker View').click();
        const redPicker = await $('~Red color component value');
        const greenPicker = await $('~Green color component value');
        const bluePicker = await $('~Blue color component value');

        //set purple color (125, 0, 125)

        await redPicker.addValue('125');
        await greenPicker.addValue('0');
        await bluePicker.addValue('125');

        await driver.pause(5000)
    })
})