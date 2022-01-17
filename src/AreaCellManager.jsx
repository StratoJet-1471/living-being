import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
//Задействуй useEffect, чтобы из пропсов передать значение Трудности в форму.

import "./css/style.css";

export default function AreaCellManager(props) {
    const [formData, setFormData] = useState({index: null, difficulty: 0});
    useEffect(() => {
        //После рендеринга синхронизируем состояние и пропсы:
        if(props.cellData.difficulty != formData.difficulty) {
            setFormData({
                index: Number(props.cellData.index),
                difficulty: Number(props.cellData.difficulty)
            });
        }
    });

    const closeManager = (event) => {
        event.stopPropagation();
        props.closingFunc();
    };

    const submitData = (event) => {
        event.preventDefault();
        //console.log(formData.difficulty);
    };

/*
    const handleChangeCellDifficulty = (event) => {
        setFormData({
            index: Number(props.cellData.index),
            difficulty: Number(event.target.value)
        });
    };
*/

//cell-manager__input_text -> onChange={handleChangeCellDifficulty}
//cell-manager__input_text -> defaultValue={formData.difficulty}
    return (
        <div className="area__cell-manager">
            <div className="cell-manager__body">
                <div className='cell-manager__title-container'>
                    <span className='cell-manager__title'>Cell index: {formData.index}</span>
                </div>
                <form className="cell-manager__form" onSubmit={submitData}>                    
                    <span>Set cell conditions:</span>
                    <input type="text" className="cell-manager__input_text" defaultValue={props.cellData.difficulty} />
                    <input type="submit" value="Отправить" />
                </form>
            </div>
            <div className="cell-manager__closing-icon-container">
                <img className="cell-manager__closing-icon" src="./design_elements/Icon-cross.png" alt="Close" onClick={closeManager}/>
            </div>
        </div>);
}