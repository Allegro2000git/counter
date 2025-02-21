import {Button} from "./Button";
import {useState} from "react";
import {Display} from "./Display";

export const Counter = () => {

    const minValue = 0;
    const maxValue = 5;

    const [count, setCount] = useState<number>(minValue);

    const getNextNum = () => {
        if (count < maxValue) {
            setCount(count+1);
        }
    };

    const reset = () => {
        setCount(minValue)
    }

    return (
        <div className="counter">
            <Display count={count} maxValue={maxValue} />
            <div className={'btn_container'}>
                <Button title={"Inc"} onClickHandler={getNextNum} disabled={count === maxValue} classes={`button ${ count === maxValue ? 'disabled' : 'active'}`}/>
                <Button title={"Reset"} onClickHandler={reset} disabled={count === minValue} classes={`button ${ count === minValue ? 'disabled' : 'active'}`}/>
            </div>
        </div>
    );
};