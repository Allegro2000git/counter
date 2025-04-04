import {Button} from "./Button";
import {Display} from "./Display";


type CounterProps = {
    count: number;
    increment: (count: number) => void;
    reset: (startValue: number) => void;
    hideSettings:(settings: boolean, count: number) => void;
    startValue: number
    settings: boolean;
    maxValue: number
}

export const Counter = ({count, reset, increment, startValue, hideSettings, settings, maxValue}: CounterProps) => {
    return (
        <div className="counter">
            <Display count={count} maxValue={maxValue}/>
            <div className={'btn_container'}>
                <Button title={"Inc"} onClickHandler={()=>increment(count)} disabled={count === maxValue} classes={`button ${ count === maxValue ? 'disabled' : 'active'}`}/>
                <Button title={"Reset"} onClickHandler={()=>reset(startValue)} classes={`button ${ count === startValue ? 'disabled' : 'active'}`}/>
                <Button title={"Set"} onClickHandler={()=>hideSettings(settings, count)} classes={'counter_set'}/>
            </div>
        </div>
    );
};