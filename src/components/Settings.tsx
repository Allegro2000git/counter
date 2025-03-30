import {Button} from "./Button";
import {ChangeEvent} from "react";

type SettingsProps = {
    hideSettings: () => void;
    startValue: number;
    maxValue: number;
    setLocalStartValue: (e: ChangeEvent<HTMLInputElement>) => void;
    setLocalMaxValue: (e: ChangeEvent<HTMLInputElement>) => void;

}

export const Settings = ({hideSettings, startValue, maxValue, setLocalStartValue, setLocalMaxValue}: SettingsProps ) => {

    const isError = maxValue <= startValue
    const isStartValueNegative = Math.sign(startValue) === -1
    const isMaxValueNegative = Math.sign(maxValue) === -1




    return (
        <div className={"settings"}>
            <div className={"settings_container"}>
                <div className={"settings_item"}>
                    <span className={"inputName"}>Max value:</span>
                    <input className={isError || isMaxValueNegative ? "input_error" : 'input1'} type={"number"} value={maxValue} onChange={setLocalMaxValue}></input>
                </div>
                <div className={"settings_item"}>
                    <span className={"inputName"}>Start value:</span>
                    <input className={isError || isStartValueNegative ? "input_error" : "input2"} type={"number"} value={startValue} onChange={setLocalStartValue}></input>
                </div>
            </div>
            <Button classes={'counter_set'} title={"Set"} onClickHandler={hideSettings} disabled={isError || !maxValue || isStartValueNegative}/>
        </div>
    );
};
