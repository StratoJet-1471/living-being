export function createAreaCellsDataArray_Empty(cellsN) {
    return (new Array(cellsN)).fill(0); //Создаём массив из cellsN эл-тов и заполняем его весь какими-нибудь одинаковыми значениями (для неприсвоенного элемента не вызовется коллбэк ф-и forEach или map - эл-то должен иметь значение хотя бы undefined).
}

export function createAreaCellsDataArray_LowDifficulty(cellsN) {
    const bottomLimit = 1;
    const topLimit = 10;
    const templateArr = new Array(cellsN).fill(0);
    return templateArr.map(() => Math.floor((topLimit - bottomLimit)*Math.random()));
}