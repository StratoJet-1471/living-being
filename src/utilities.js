
export function createInitialWorldState(dimensions) {
    return {
        cells: createAreaCellsData_Empty(dimensions), 
        entityInternalState: {
            pulseCount: 0,
            movingDirection: null,
            neighborCellsInfo: null,
        },
        entityPosition: null, //Присваиваем null, поскольку значение стартовой позиции Существа должно определяться внутри объекта Мира <Area/>.  И уже оттуда оно, с помощью диспетчеризации соответствующего события (forceSetEntityPosition()), сообщается в хранилище.
    };
}

export function createAreaCellsData_Empty(dimensions) {
    //Нужно сделать двумерный массив. Это массив строк (т.е., горизонталей), каждая из которых представляет собой массив ячеек. Перебирая горизонтали (т.е., делая перебор по Y), заполняем каждую из них (делая перебор по X).
    return Array.from(Array(dimensions.y), (_, y_index) => { 
        return Array(dimensions.x).fill(0).map((_, x_index) => { //fill(0) заполняет массив нулями (можно чем угодно, кроме Undefined, лишь бы одинаковыми эл-тами), т.к. если эл-ты не определены (undefined), то для них не вызовется каллбэк ни map(), ни forEach().
            return { x: x_index+1, y: y_index+1, difficulty: 0}; 
        });
    });

}

export function createAreaCellsData_LowDifficulty(dimensions) {
    const bottomLimit = 1;
    const topLimit = 10;

    //Нужно сделать двумерный массив. Это массив строк (т.е., горизонталей), каждая из которых представляет собой массив ячеек. Перебирая горизонтали (т.е., делая перебор по Y), заполняем каждую из них (делая перебор по X).
    return Array.from(Array(dimensions.y), (_, y_index) => { 
        return Array(dimensions.x).fill(0).map((_, x_index) => { //fill(0) заполняет массив нулями (можно чем угодно, кроме Undefined, лишь бы одинаковыми эл-тами), т.к. если эл-ты не определены (undefined), то для них не вызовется каллбэк ни map(), ни forEach().
            return { x: x_index+1, y: y_index+1, difficulty: Math.floor((topLimit - bottomLimit)*Math.random())}; 
        });
    });
}