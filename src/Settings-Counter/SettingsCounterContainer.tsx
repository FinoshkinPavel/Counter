import React, {ChangeEvent, useState} from 'react';
import {SettingsCounter} from "./SettingsCounter";

type SettingsCounterContainerPropsType = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setCountValue: (value: number) => void
    setMaxValueForCount: (value: number) => void
    error: boolean
    setError: (value: boolean) => void
    setDisabledForInc: (value: boolean)=>void
    setDisabledForReset: (value: boolean)=>void
    showNoShowNum: boolean
    setShowNoShowNum: (value: boolean)=>void
}

export const SettingsCounterContainer = (props: SettingsCounterContainerPropsType) => {

    const [disabledForSetBtn, setDisabledForSetBtn] = useState<boolean>(true)


    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
        debugger
        if (Number(e.currentTarget.value) < 0 && props.startValue >= 0) {
            setDisabledForSetBtn(true)
            props.setError(true)
        } else if (Number(e.currentTarget.value) < 0 && props.startValue < 0) {
            setDisabledForSetBtn(true)
            props.setError(true)
        } else if (Number(e.currentTarget.value) >= 0 && props.startValue < 0) {
            setDisabledForSetBtn(true)
            props.setError(true)
        } else if (Number(e.currentTarget.value) < props.startValue) {
            setDisabledForSetBtn(true)
            props.setError(true)
        } else if (Number(e.currentTarget.value) === props.startValue) {
            setDisabledForSetBtn(true)
            props.setError(true)
        } else {
            setDisabledForSetBtn(false)
            props.setError(false)
        }
    }
    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(Number(e.currentTarget.value))
        if (Number(e.currentTarget.value) < 0 && props.maxValue >= 0) {
            setDisabledForSetBtn(true)
            props.setError(true)
        } else if (Number(e.currentTarget.value) < 0 && props.maxValue < 0) {
            setDisabledForSetBtn(true)
            props.setError(true)
        } else if (Number(e.currentTarget.value) >= 0 && props.maxValue < 0) {
            setDisabledForSetBtn(true)
            props.setError(true)
        } else if (Number(e.currentTarget.value) > props.maxValue) {
            setDisabledForSetBtn(true)
            props.setError(true)
        } else if (Number(e.currentTarget.value) === props.maxValue) {
            setDisabledForSetBtn(true)
            props.setError(true)
        } else {
            setDisabledForSetBtn(false)
            props.setError(false)
        }
    }
    const activeSettingsMode = () => {
        props.setShowNoShowNum(false)
        props.setDisabledForInc(true)
        props.setDisabledForReset(true)
        if (props.maxValue >= 0 && props.startValue >= 0 && props.maxValue > props.startValue) {
            setDisabledForSetBtn(false)
        } else if (props.startValue >= 0 && props.maxValue >= 0 && props.startValue < props.maxValue) {
            setDisabledForSetBtn(false)
        } else {
            setDisabledForSetBtn(true)
        }
    }
    const setValue = () => {
        props.setCountValue(props.startValue)
        props.setMaxValueForCount(props.maxValue)
        setDisabledForSetBtn(!disabledForSetBtn)
        props.setDisabledForInc(false)
        props.setShowNoShowNum(true)
    }


    return <SettingsCounter
                maxValue={props.maxValue}
                startValue={props.startValue}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                setValue={setValue}
                disabledForSetBtn={disabledForSetBtn}
                activeSettingsMode={activeSettingsMode}
            />

};