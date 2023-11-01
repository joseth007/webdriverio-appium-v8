import AddNoteScreen from "./add-note.screen";
import CommonsFunctions from "./commons-functions";

class EditNoteScreen {
    get firstNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }
    get noteOption(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]');
    }
    get deleteOption(){
        return $('//*[@text="Delete"]');
    }
    get menuBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }
    get menuTrashCan(){
        return $('//*[@text="Trash Can"]');
    }
    async skipTutorial(tcId,tcDescription){
        await CommonsFunctions.takeScreenshot(tcId,tcDescription, "inicio");
        await AddNoteScreen.skipBtn.click();
        await CommonsFunctions.takeScreenshot(tcId,tcDescription,"saltarTutotial");
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    }

    async addAndSaveNote(tcId,tcDescription,noteHeading, noteBody){
        await AddNoteScreen.addNewNote.click();
        await CommonsFunctions.takeScreenshot(tcId,tcDescription,"agregarNota");
        await AddNoteScreen.textOption.click();
        await CommonsFunctions.takeScreenshot(tcId,tcDescription,"pantallaNota");
        await expect(AddNoteScreen.textEditing).toBeDisplayed();
        await AddNoteScreen.noteHeading.addValue(noteHeading);
        await CommonsFunctions.takeScreenshot(tcId,tcDescription,"agregarTitulo");
        await AddNoteScreen.noteBody.addValue(noteBody);
        await CommonsFunctions.takeScreenshot(tcId,tcDescription,"agregarCuerpo");
        await driver.pause(3000);

        await AddNoteScreen.saveNote();
        await CommonsFunctions.takeScreenshot(tcId,tcDescription,"notaGuardada");
        await expect(AddNoteScreen.editBtn).toBeDisplayed;
        await expect (AddNoteScreen.viewNote).toHaveText(noteBody);
        await driver.back();

    }
}
export default new EditNoteScreen();