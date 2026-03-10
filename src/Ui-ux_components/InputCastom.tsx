
interface forInputCube {
    className: string;
    value?: string;
    maxlength:number;
    name?: string;
    type?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, ind?:number) => void
}

function InputCastom({
    className, maxlength, type, name, value, onChange
                   } : forInputCube){

    return (
        <input
            className={className}
            type={type}
            maxLength={maxlength}
            name={name}
            value={value}
            onChange={onChange}/>
    )
}

export default InputCastom;