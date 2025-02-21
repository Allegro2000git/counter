
type DisplayProps = {
    count: number;
    maxValue: number;
}

export const Display = ({count, maxValue}: DisplayProps) => {
    return (
            <div className={count === maxValue ? "red_counter" : "default_counter"}>{count}</div>

    );
};
