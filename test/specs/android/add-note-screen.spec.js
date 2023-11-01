import EditNoteScreen from "../../screenobjects/android/edit-note.screen";

describe('test', () => {
    
    it('Add Note', async () => {
        const tcId = '01';
        const tcDescription = 'addNewNote';
        await EditNoteScreen.skipTutorial(await tcId, await tcDescription);
        await EditNoteScreen.addAndSaveNote(await tcId, await tcDescription,"Lista de compras","Tomate\nAguacate\nArroz");
    })

    
})