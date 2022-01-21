export function createInitialWorldState(dimensions) {
    return {
        cells: createAreaCellsData_Empty(dimensions), 
        entityPulseCount: 0
    };
}

export function createAreaCellsData_Empty(dimensions) {
    return Array.from(Array(dimensions.y), (_, y_index) => { 
        return Array(dimensions.x).fill(0).map((_, x_index) => { //fill(0) заполняет массив нулями (можно чем угодно, кроме Undefined, лишь бы одинаковыми эл-тами), т.к. если эл-ты не определены (undefined), то для них не вызовется каллбэк ни map(), ни forEach().
            return { x: x_index+1, y: y_index+1, difficulty: 0}; 
        });
    });

}

export function createAreaCellsData_LowDifficulty(dimensions) {
    const bottomLimit = 1;
    const topLimit = 10;

    return Array.from(Array(dimensions.y), (_, y_index) => { 
        return Array(dimensions.x).fill(0).map((_, x_index) => { //fill(0) заполняет массив нулями (можно чем угодно, кроме Undefined, лишь бы одинаковыми эл-тами), т.к. если эл-ты не определены (undefined), то для них не вызовется каллбэк ни map(), ни forEach().
            return { x: x_index+1, y: y_index+1, difficulty: Math.floor((topLimit - bottomLimit)*Math.random())}; 
        });
    });
}