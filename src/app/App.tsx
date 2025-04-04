import './App.css';
import {useState} from "react";
import {Settings} from "../components/Settings";
import {
    IncrementAC,
    ResetAC, SetCountAC
} from "../module/counter-reducer";
import {Counter} from "../components/Counter";
import {useAppSelector} from "../common/hooks/useAppSelector";
import {selectCounter} from "../module/counter-selectors";
import {useAppDispatch} from "../common/hooks/useAppDispatch";

function App() {
    const count = useAppSelector(selectCounter);
    const dispatch = useAppDispatch()

    const [settings, setSettings] = useState(false)


    const hideSettings = (settings: boolean, count: number) => {
        setSettings(!settings)
        dispatch(SetCountAC({count}))
    }

    const incrementCounter = () => {
        dispatch(IncrementAC())
    }

    const resetCounter = (count: number) => {
        dispatch(ResetAC({count}))
    }


    return (
        <div className="App">
            {  settings
                ?  <Settings
                    hideSettings={hideSettings}
                    startValue={count.startValue}
                    maxValue={count.maxValue}
                    settings={settings}
                    count={count.count}
                />
                : <Counter
                    count={count.count}
                    increment={incrementCounter}
                    reset={resetCounter}
                    hideSettings={hideSettings}
                    startValue={count.startValue}
                    settings={settings}
                    maxValue={count.maxValue}/>
            }

        </div>
    );
}

export type CounterInitialState = {
    count: number;
    startValue: number;
    maxValue: number;
}

export default App;
