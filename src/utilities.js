export function createInitCellsDataArray(cellsN) {
    return (new Array(cellsN)).fill(1); //Создаём массив из cellsN эл-тов и заполняем его весь какими-нибудь одинаковыми значениями (для неприсвоенного элемента не вызовется коллбэк ф-и forEach или map - эл-то должен иметь значение хотя бы undefined).
}