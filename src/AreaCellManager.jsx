import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';

import {setCellData} from './react-redux-store/slice.js';

import "./css/style.css";

export default function AreaCellManager(props) {
    const [formData, setFormData] = useState({index: null, difficulty: 0});
    const dispatch = useDispatch();

    useEffect(() => {
        //После рендеринга синхронизируем состояние и пропсы:
        if(formData.index === null) {
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
        dispatch(setCellData({
            index: formData.index, 
            difficulty: formData.difficulty
        }));
    };


    const handleChangeCellDifficulty = (event) => {
        const diffValidationRegExp = /[^0-9\.]/g;
        let diff = event.target.value;

        if(diff.match(diffValidationRegExp)) diff = diff.replace(diffValidationRegExp, '');
        setFormData({
            index: formData.index,
            difficulty: diff
        });
    };

    return (
        <div className="area__cell-manager">
            <div className="cell-manager__body">
                <div className='cell-manager__cell-number-container'>
                    <span className='cell-manager__cell-number'>{formData.index+1}</span>
                </div>
                <form className="cell-manager__form" onSubmit={submitData}>                    
                    <span className="cell-manager__form-title">Set cell conditions:</span>
                    <div className="cell-manager__input-block">
                        <span className="cell-manager__input-description">Difficulty: </span>
                        <input type="text" className="cell-manager__input_text" value={formData.difficulty} onChange={handleChangeCellDifficulty}/>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="cell-manager__closing-icon-container">
                <img className="cell-manager__closing-icon" src="./design_elements/Icon-cross.png" alt="Close" onClick={closeManager}/>
            </div>
        </div>);
}