import React from 'react';
import s from './counter.module.css'
import Btn from "../UniversalBtn/Btn";


type CounterPropsType = {
    countValue: number
    addCount: () => void
    removeCount: () => void
    disabledForInc: boolean
    disabledForReset: boolean
    maxValueForCount: number
    error: boolean
    showNoShowNum: boolean
}

export const Counter: React.FC<CounterPropsType> = ({
                                                        countValue, addCount, removeCount,
                                                        disabledForInc, disabledForReset,maxValueForCount, error, showNoShowNum,...restProps
                                                    }) => {
    return (
        <div className={s.wrap}>
            <div className={s.wrapCounter}>
                <div className={s.counterBoard}>
                    <div>
                        {!showNoShowNum && <div>{error ? <span className={s.red}>Incorrect value</span> : <span>enter values end press 'set'</span>}</div>}
                        {showNoShowNum && <div className={countValue === maxValueForCount ? s.red : ''}>{countValue}</div> }
                    </div>
                </div>
                <div className={s.wrapForButton}>
                    <Btn name={'inc'} callback={addCount} disabled={disabledForInc}/>
                    <Btn name={'reset'} callback={removeCount} disabled={disabledForReset}/>
                </div>
            </div>
        </div>
    );
};