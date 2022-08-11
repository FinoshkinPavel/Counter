import React from 'react';
import s from './UniversalBtn.module.css'

type CounterContainer = {
    name: string
    callback: () => void
    disabled: boolean
    style?: string
}


const Btn = (props: CounterContainer) => {

    return <button
                onClick={props.callback}
                disabled={props.disabled}
                className={props.disabled ? s.disableBtn  : s.styleBtn}
            >
                {props.name}
            </button>
};

export default Btn;