import React, {useState} from 'react';
import './App.css';
import {CounterContainer} from "./Counter/CounterContainer";
import {SettingsCounterContainer} from "./Settings-Counter/SettingsCounterContainer";

function App() {
    // ForCounter
    const [countValue, setCountValue] = useState<number>(0)
    const [maxValueForCount, setMaxValueForCount] = useState<number>(0)
   // ForSettingsCounter
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>( 0)
    // Fore Incorrect value
    const [error, setError] = useState<boolean>(false)
    //Fore Disable incBtn && resetBtn
    const [disabledForInc, setDisabledForInc] = useState<boolean>(true)
    const [disabledForReset, setDisabledForReset] = useState<boolean>(true)
    //Fore show counter
    const [showNoShowNum, setShowNoShowNum] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <SettingsCounterContainer
                maxValue={maxValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                setCountValue={setCountValue}
                setMaxValueForCount={setMaxValueForCount}
                error={error}
                setError={setError}
                setDisabledForInc={setDisabledForInc}
                setDisabledForReset={setDisabledForReset}
                showNoShowNum={showNoShowNum}
                setShowNoShowNum={setShowNoShowNum}
            />
            <CounterContainer
                countValue={countValue}
                setCountValue={setCountValue}
                disabledForInc={disabledForInc}
                setDisabledForInc={setDisabledForInc}
                disabledForReset={disabledForReset}
                setDisabledForReset={setDisabledForReset}
                maxValueForCount={maxValueForCount}
                startValue={startValue}
                error={error}
                showNoShowNum={showNoShowNum}
            />
        </div>
    );
}



export default App;
