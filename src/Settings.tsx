import {Button} from "./Button";
import {ChangeEvent, useEffect, useState} from "react";

type SettingsProps = {
    hideSettings: (startValue:number, maxValue:number) => void;
    startValue: number;
    maxValue: number;
}

export const Settings = ({hideSettings, startValue, maxValue}: SettingsProps ) => {

    const [localStartValue, setLocalStartValue] = useState<number>(startValue);
    const [localMaxValue, setLocalMaxValue] = useState<number>(maxValue);

    const isError = localMaxValue <= localStartValue;
    const isStartValueNegative = Math.sign(localStartValue) === -1
    const isMaxValueNegative = Math.sign(localMaxValue) === -1


    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStartValue(Number(e.currentTarget.value));
    }

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalMaxValue(Number(e.currentTarget.value));

    }

    useEffect(() => {
        localStorage.setItem("startValue", JSON.stringify(localStartValue));
        localStorage.setItem("maxValue", JSON.stringify(localMaxValue));
    }, [localStartValue, localMaxValue]);

    useEffect(() => {
        let valueAsStringStart = localStorage.getItem("startValue");
        if (valueAsStringStart) {
            setLocalStartValue(JSON.parse(valueAsStringStart));
        }

        let valueAsStringMax = localStorage.getItem("maxValue");
        if (valueAsStringMax) {
            setLocalMaxValue(JSON.parse(valueAsStringMax));
        }
    }, []);

    const clickHandler = () => {
        hideSettings(localStartValue,localMaxValue)
    }

    return (
        <div className={"settings"}>
            <div className={"settings_container"}>
                <div className={"settings_item"}>
                    <span className={"inputName"}>Max value:</span>
                    <input className={isError || isMaxValueNegative ? "input_error" : 'input1'} type={"number"} value={localMaxValue} onChange={changeMaxValue}></input>
                </div>
                <div className={"settings_item"}>
                    <span className={"inputName"}>Start value:</span>
                    <input className={isError || isStartValueNegative ? "input_error" : "input2"} type={"number"} value={localStartValue} onChange={changeStartValue}></input>
                </div>
            </div>
            <Button classes={'counter_set'} title={"Set"} onClickHandler={clickHandler} disabled={isError || !localMaxValue || isStartValueNegative}/>
        </div>
    );
};
