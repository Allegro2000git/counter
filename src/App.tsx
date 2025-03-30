import './App.css';
import {ChangeEvent, useEffect, useReducer, useState} from "react";
import {Settings} from "./components/Settings";
import {
    CounterReducer, getInitialState,
    IncrementAC,
    ResetAC, SetCountAC, SetLocalMaxValueAC, SetLocalStartValueAC,
} from "./module/counter-reducer";
import {Counter} from "./components/Counter";

function App() {

    const [{startValue, maxValue, count}, dispatchCounter] = useReducer(CounterReducer, getInitialState())
    const [settings, setSettings] = useState(false)

    useEffect(() => {
        localStorage.setItem("startValue", JSON.stringify(startValue));
        localStorage.setItem("maxValue", JSON.stringify(maxValue));
        localStorage.setItem("count", JSON.stringify(count));
    }, [startValue, maxValue, count]);


    const hideSettings = () => {
        setSettings(!settings)
        dispatchCounter(SetCountAC(startValue))
    }

    const incrementCounter = () => {
        dispatchCounter(IncrementAC(count))
    }

    const resetCounter = () => {
        dispatchCounter(ResetAC(startValue))
    }

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatchCounter(SetLocalStartValueAC(Number(e.currentTarget.value)))
    }

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatchCounter(SetLocalMaxValueAC(Number(e.currentTarget.value)))
    }


    return (
    <div className="App">
        {settings
            ? <Settings  hideSettings={hideSettings}
                         startValue={startValue}
                         maxValue={maxValue}
                         setLocalStartValue={changeStartValue}
                         setLocalMaxValue={changeMaxValue}
            />
            : <Counter count={count}
                       startValue={startValue}
                       maxValue={maxValue}
                       increment={incrementCounter}
                       reset={resetCounter}
                       showSettings={hideSettings}
            />}
    </div>
  );
}

export default App;
