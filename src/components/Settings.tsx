import {Button} from "./Button";
import {ChangeEvent} from "react";
import {SetLocalMaxValueAC, SetLocalStartValueAC} from "../module/counter-reducer";
import {useDispatch} from "react-redux";

type SettingsProps = {
    hideSettings: (settings: boolean, count: number) => void;
    settings: boolean;
    startValue: number;
    maxValue: number;
    count: number;
}

export const Settings = ({hideSettings, startValue, maxValue, settings, count}: SettingsProps ) => {
    const dispatch = useDispatch()

    const isError = maxValue <= startValue
    const isStartValueNegative = Math.sign(startValue) === -1
    const isMaxValueNegative = Math.sign(maxValue) === -1

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetLocalStartValueAC({ startValue: +e.currentTarget.value }))
    }

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetLocalMaxValueAC({maxValue: +e.currentTarget.value}))
    }


    return (
        <div className={"settings"}>
            <div className={"settings_container"}>
                <div className={"settings_item"}>
                    <span className={"inputName"}>Max value:</span>
                    <input className={isError || isMaxValueNegative ? "input_error" : 'input1'} type={"number"} value={maxValue} onChange={changeMaxValue}></input>
                </div>
                <div className={"settings_item"}>
                    <span className={"inputName"}>Start value:</span>
                    <input className={isError || isStartValueNegative ? "input_error" : "input2"} type={"number"} value={startValue} onChange={changeStartValue}></input>
                </div>
            </div>
            <Button classes={'counter_set'} title={"Set"} onClickHandler={()=>hideSettings(settings, count)} disabled={isError || !maxValue || isStartValueNegative}/>
        </div>
    );
};
