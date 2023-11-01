const fs = require('fs');
class CommonsFunctions {
    constructor(){
        this.screenshotCounter = 0;
    }
    
    async createFolderEvidence(folderEvidence) {
        if (await !fs.existsSync(folderEvidence)) {
            await fs.mkdirSync(folderEvidence);
        }
    }
    async takeScreenshot(tcId, tcDescription, path){
        this.screenshotCounter++;
        await driver.pause(500);
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
        const day = String(currentDate.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;

        await this.createFolderEvidence('./test/screenshots/' + formattedDate);
        await this.createFolderEvidence('./test/screenshots/' + formattedDate + '/' + tcId + '-' + tcDescription);
        await driver.saveScreenshot('./test/screenshots/' + formattedDate + '/' + tcId + '-' + tcDescription + '/' + this.screenshotCounter + '-' + path + '.png');
    }
    
}
export default new CommonsFunctions();