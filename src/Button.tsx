type ButtonType = {
    title: string;
    onClickHandler?: () => void;
    disabled: boolean;
    classes?: string;
}

export const Button = ({title, onClickHandler, disabled, classes} : ButtonType) => {
    return <button onClick={onClickHandler} disabled={disabled} className={classes}>{title}</button>
};
