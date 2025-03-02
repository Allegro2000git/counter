import {Button} from "./Button";
import {Display} from "./Display";


type CounterProps = {
    count: number;
    startValue: number;
    maxValue: number;
    getNextNum: () => void;
    reset: () => void;
    showSettings: () => void;
}

export const Counter = ({count, startValue, maxValue, reset, getNextNum, showSettings}: CounterProps) => {
    return (
        <div className="counter">
            <Display count={count} maxValue={maxValue} />
            <div className={'btn_container'}>
                <Button title={"Inc"} onClickHandler={getNextNum} disabled={count === maxValue} classes={`button ${ count === maxValue ? 'disabled' : 'active'}`}/>
                <Button title={"Reset"} onClickHandler={reset} disabled={count === startValue} classes={`button ${ count === startValue ? 'disabled' : 'active'}`}/>
                <Button title={"Set"} onClickHandler={showSettings} classes={'counter_set'}/>
            </div>
        </div>
    );
};