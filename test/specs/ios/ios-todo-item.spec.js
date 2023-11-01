import ListScreen from '../../screenobjects/ios/list.screen';
import ItemScreen from '../../screenobjects/ios/item.screen';

describe('Todo List', () => {

    before(async () => {
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue('Things to do today');
        await ListScreen.createBtn.click();
        await expect(await ListScreen.listNameField("Things to do today")).toBeExisting();
        await ListScreen.listNameField("Things to do today").click();
    });

    it('Create an Item List', async () =>  {
        // CREATE TODO ITEM
        await driver.pause(3000);
        await ItemScreen.addItemBtn.click();
        await ItemScreen.titleInputField.addValue('Automatizar');
        await ItemScreen.dueInputField.click();
        await ItemScreen.tapOnCalendar();
        //await ItemScreen.arrowCalentarBtn.click();
        await ItemScreen.getByAccesibility('Thursday, November 23').click();
        await ItemScreen.secondWindow.click()
        await ItemScreen.createBtn.click();

        // ASSERTION
        await expect(await ItemScreen.getByAccesibility("Automatizar")).toBeExisting();
    })
})