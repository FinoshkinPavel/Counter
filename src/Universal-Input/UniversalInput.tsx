import React, {ChangeEvent} from 'react';
import s from './UniversalInput.module.css'

type UniversalInutPropsType = {
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>)=>void
    onFocus: ()=>void
    type: string
}

export const UniversalInput = (props: UniversalInutPropsType) => {


    return <input
        type={props.type}
        value={props.value}
        onChange={(e)=>{props.onChange(e)}}
        onFocus={props.onFocus}
        className={s.inputEl}
    />
};

