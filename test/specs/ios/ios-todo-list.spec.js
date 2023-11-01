import ListScreen from "../../screenobjects/ios/list.screen";
describe('Todo List', () => {

    it.only('Create a Todo List', async () =>  {
        // CREATE TODO LIST
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue('Things to do today');
        await ListScreen.createBtn.click();
        await expect(await ListScreen.listNameField("Things to do today")).toBeExisting();
        await driver.pause(15000)
    })
})