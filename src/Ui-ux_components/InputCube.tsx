
interface forInputCube {
    className: string;
    value?: string;
    maxlength:number;
    name?: string;
    type?: string;
}

function InputCube({
    className, maxlength, type, name, value
                   } : forInputCube){

    return (
        <input
            className={className}
            type={type}
            maxLength={maxlength}
            name={name}
            value={value}/>
    )
}

export default InputCube;