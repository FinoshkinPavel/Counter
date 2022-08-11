import React, {useState} from 'react';
import {Counter} from "./Counter";

type CounterContainerPropsType = {
    countValue: number
    setCountValue: (countValue: number)=>void
    disabledForInc: boolean
    setDisabledForInc: (value: boolean)=>void
    disabledForReset: boolean
    setDisabledForReset: (value:boolean)=>void
    maxValueForCount: number
    startValue: number
    error: boolean
    showNoShowNum: boolean
}


export const CounterContainer = (props: CounterContainerPropsType) => {

    const addCount = () => {
        props.setCountValue(props.countValue + 1)

        if(props.countValue >= props.maxValueForCount - 1 ){
            props.setDisabledForInc(!props.disabledForInc)
        }

        if(props.countValue > 0 - 1){
            props.setDisabledForReset(false)
        }

    }
    const removeCount = () => {
        props.setCountValue(props.startValue)
        if(props.countValue === props.maxValueForCount){
            props.setDisabledForInc(!props.disabledForInc)
        } else {
            props.setDisabledForInc(false)
        }
        props.setDisabledForReset(!props.disabledForReset)
    }

    return <Counter
                countValue={props.countValue}
                addCount={addCount}
                removeCount={removeCount}
                disabledForInc={props.disabledForInc}
                disabledForReset={props.disabledForReset}
                maxValueForCount={props.maxValueForCount}
                error={props.error}
                showNoShowNum={props.showNoShowNum}
            />
};

