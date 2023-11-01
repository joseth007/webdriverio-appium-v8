class ItemScreen{
    get addItemBtn (){
        return $('~Add');
    } 

    get titleInputField(){
        return $('//*[@value="Title"]');
    }

    get dueInputField(){
        return $('//*[@value="Due"]');
    }

    get arrowCalentarBtn(){
        return $('~Next Month')
    }

    get createBtn(){
        return $('~Create');
    }

    get secondWindow(){
        return $('//XCUIElementTypeWindow[@index=2]');
    }

    getByAccesibility(name){
        return $(`~${name}`);
    }

    tapOnCalendar(){
        const x =60;
        const y = 910;
        driver.touchAction([{action: 'tap', x, y} ]);
    }
}

export default new ItemScreen();