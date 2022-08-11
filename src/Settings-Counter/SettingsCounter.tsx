import React, {ChangeEvent} from 'react';
import s from './SettingsCounter.module.css'
import Btn from "../UniversalBtn/Btn";
import {UniversalInput} from "../Universal-Input/UniversalInput";

type SettingsCounterPropsType = {
    maxValue: number
    startValue: number
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    setValue: ()=>void
    disabledForSetBtn: boolean
    activeSettingsMode: ()=>void
}

export const SettingsCounter: React.FC<SettingsCounterPropsType> = ({
   maxValue, startValue,
   changeMaxValue, changeStartValue, setValue,
    disabledForSetBtn, activeSettingsMode
                                                              }) => {
    return (
        <div className={s.wrapSettingsTolls}>
            {/*Count settings Pad*/}
            <div className={s.wrapSettingsPad}>
                <span className={s.text}>max value :</span>
                <UniversalInput
                    value={maxValue}
                    onChange={changeMaxValue}
                    onFocus={activeSettingsMode}
                    type={'number'}
                />
                <span className={s.text}>start value :</span>
                <UniversalInput
                    value={startValue}
                    onChange={changeStartValue}
                    onFocus={activeSettingsMode}
                    type={'number'}
                />
            </div>
            {/*Container For Btn*/}
            <div className={s.wrapContainBtt}>
                <Btn name={'set'} callback={setValue} disabled={disabledForSetBtn}/>
            </div>
        </div>
    );
};

