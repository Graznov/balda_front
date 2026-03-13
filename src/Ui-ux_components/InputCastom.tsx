
interface forInputCube {
    className: string;
    value?: string;
    maxlength:number;
    disable?: boolean;
    name?: string;
    type?: string;
    onClick?: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, ind?:number) => void
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

function InputCastom({
    className, maxlength, type, name, value, onChange, disable, onClick
                   } : forInputCube){

    return (
        <input
            disabled={disable}
            className={className}
            type={type}
            maxLength={maxlength}
            name={name}
            value={value}
            onChange={onChange}
            onClick={onClick}
        />
    )
}

export default InputCastom;