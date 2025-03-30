
const initialStateReducer = {
    count: 0,
    startValue: 0,
    maxValue: 5,
    settings: false
}

type StateType = typeof initialStateReducer

export type IncrementAT = ReturnType<typeof IncrementAC>
export type ResetAT = ReturnType<typeof ResetAC>
export type SetLocalMaxValueAT = ReturnType<typeof SetLocalMaxValueAC>
export type SetLocalStartValueAT = ReturnType<typeof SetLocalStartValueAC>
export type SetCountAT = ReturnType<typeof SetCountAC>

export type ActionType =  IncrementAT | ResetAT | SetLocalMaxValueAT | SetLocalStartValueAT | SetCountAT

export const getInitialState = (): StateType => {
    const storedStartValue = localStorage.getItem("startValue");
    const storedMaxValue = localStorage.getItem("maxValue");
    const storedCountValue = localStorage.getItem("count");

    return {
        ...initialStateReducer,
        count: (storedCountValue && JSON.parse(storedCountValue)) || initialStateReducer.count,
        startValue: storedStartValue !== null ? JSON.parse(storedStartValue) : initialStateReducer.startValue,
        maxValue: storedMaxValue !== null ? JSON.parse(storedMaxValue) : initialStateReducer.maxValue,
    };
};

const Reset = "Reset"
const Increment  = "Increment"
const SetLocalMaxValue = "SetLocalMaxValue"
const SetLocalStartValue ="SetLocalStartValue"
const Count = "Count"

export const CounterReducer =
    (state: StateType = initialStateReducer, action: ActionType): StateType => {
        switch (action.type) {
            case Increment: {
                return {...state, count: action.payload.count + 1}
            }
            case Reset: {
                return {...state, count: action.payload.startValue}
            }
            case SetLocalMaxValue: {
                return {...state, maxValue: action.payload.maxValue};
            }
            case SetLocalStartValue: {
                return {...state, startValue: action.payload.startValue};
            }
            case Count: {
                return {...state, count: action.payload.startValue};
            }
            default: return state
        }
    }

    export const IncrementAC = (count: number) => ({
        type: "Increment", payload: {count}
    } as const)

    export const ResetAC = (startValue: number) => ({
        type: "Reset", payload: {startValue}
    } as const)

    export const SetLocalMaxValueAC = (maxValue: number) => ({
        type: "SetLocalMaxValue", payload: {maxValue}
    } as const)

    export const SetLocalStartValueAC = (startValue: number) => ({
        type: "SetLocalStartValue", payload: {startValue}
    } as const)

    export const SetCountAC = (startValue: number) => ({
    type: "Count", payload: {startValue}
    } as const)
