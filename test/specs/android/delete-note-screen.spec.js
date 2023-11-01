import CommonsFunctions from "../../screenobjects/android/commons-functions";
import EditNoteScreen from "../../screenobjects/android/edit-note.screen";

describe('Delete Note', () => {
    const tcId = '02';
    const tcDescription = 'Delete note'

    before(async () => {
        await EditNoteScreen.skipTutorial(tcId,tcDescription);
        await EditNoteScreen.addAndSaveNote(tcId,tcDescription,"Lista de compras","Tomate\nAguacate\nArroz");
    });

    it('Delete a note & check the note in trash can', async () =>  {
        await EditNoteScreen.firstNote.click();
        await CommonsFunctions.takeScreenshot(tcId,tcDescription,"abrirNota");
        await EditNoteScreen.noteOption.click();
        await CommonsFunctions.takeScreenshot(tcId,tcDescription,"abrirOpcionesNota");
        await EditNoteScreen.deleteOption.click()
        await CommonsFunctions.takeScreenshot(tcId,tcDescription,"clickEnBorrarNota");
        await driver.pause(3000);
        await driver.acceptAlert();
        await CommonsFunctions.takeScreenshot(tcId,tcDescription,"clickEnAceptar");

        await expect(EditNoteScreen.firstNote).not.toExist();
        await CommonsFunctions.takeScreenshot(tcId,tcDescription,"validarNotaEliminada");
        await driver.pause(3000);

        await EditNoteScreen.menuBtn.click();
        await CommonsFunctions.takeScreenshot(tcId,tcDescription,"abrirMenu");
        await EditNoteScreen.menuTrashCan.click();
        await CommonsFunctions.takeScreenshot(tcId,tcDescription,"clickenTrashCan");

        await expect($('//*[@text="Lista de compras"]')).toExist();
        await CommonsFunctions.takeScreenshot(tcId,tcDescription,"ListaBorrada");

    })
})