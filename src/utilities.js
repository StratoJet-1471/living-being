export function createInitialWorldState(dimensions) {
    return {
        //cells: createAreaCellsData_Empty(areaCellsNumber), 
        coordsRows: createAreaCellsData_Empty(dimensions), 
        entityPulseCount: 0
    };
}

export function createAreaCellsData_Empty(dimensions) {
    return Array.from(Array(dimensions.y), () => Array(dimensions.x).fill({ difficulty: 0}));

}

export function createAreaCellsData_LowDifficulty(dimensions) {
    const bottomLimit = 1;
    const topLimit = 10;

    return Array.from(Array(dimensions.y), () => { 
        return Array(dimensions.x).fill(0).map(() => { difficulty: Math.floor((topLimit - bottomLimit)*Math.random())})
    });
}