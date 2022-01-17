export function createAreaCellsData_Empty(cellsN) {
    const templateArr = new Array(cellsN).fill(0); //Создаём массив из cellsN эл-тов и заполняем его весь какими-нибудь одинаковыми значениями (для неприсвоенного элемента не вызовется коллбэк ф-и forEach или map - эл-то должен иметь значение хотя бы undefined).
    return templateArr.map((_, index) => { 
        return {
            index, 
            difficulty: 0
        };
    });
/*
    const cellDefaultData = { difficulty: 0};
    return (new Array(cellsN)).fill(cellDefaultData); //Создаём массив из cellsN эл-тов и заполняем его весь какими-нибудь одинаковыми значениями (для неприсвоенного элемента не вызовется коллбэк ф-и forEach или map - эл-то должен иметь значение хотя бы undefined).
*/
}

/*
export function createAreaCellsData_LowDifficulty(previousCellsDataArray) {
    const bottomLimit = 1;
    const topLimit = 10;
    if(Array.isArray(previousCellsDataArray)) {
        return previousCellsDataArray.map(() => { 
            return {difficulty: Math.floor((topLimit - bottomLimit)*Math.random())};
        });
    }
    else throw new Error({name: "modifyAreaError", message: "The argument, passed to the function createAreaCellsData_LowDifficulty(), must be an array!"});
}
*/

export function createAreaCellsData_LowDifficulty(cellsN) {
    const bottomLimit = 1;
    const topLimit = 10;
    const templateArr = new Array(cellsN).fill(0); //Создаём массив из cellsN эл-тов и заполняем его весь какими-нибудь одинаковыми значениями (для неприсвоенного элемента не вызовется коллбэк ф-и forEach или map - эл-то должен иметь значение хотя бы undefined).
    return templateArr.map((_, index) => { 
        return {
            index, 
            difficulty: Math.floor((topLimit - bottomLimit)*Math.random())
        };
    });
}