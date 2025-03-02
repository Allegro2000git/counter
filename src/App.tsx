import './App.css';
import {Counter} from "./Counter";
import {useState} from "react";
import {Settings} from "./Settings";

function App() {

    const [count, setCount] = useState<number>(0);
    const [settings, setSettings] = useState<boolean>(false);

    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);

    const showSettings = () => setSettings(true);

    const hideSettings = (startValue:number, maxValue:number) => {
        setSettings(false)
        setStartValue(startValue)
        setMaxValue(maxValue)
        setCount(startValue)
    };

    const getNextNum = () => {
        if (count < maxValue) {
            setCount(count+1);
        }
    };

    const reset = () => {
        setCount(startValue)
    }


    return (
    <div className="App">
        {settings
            ? <Settings  hideSettings={hideSettings} startValue={startValue} maxValue={maxValue}/>
            : <Counter count={count} startValue={startValue} maxValue={maxValue} getNextNum={getNextNum} reset={reset} showSettings={showSettings} />}
    </div>
  );
}

export default App;
