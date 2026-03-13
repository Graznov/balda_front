interface forButtonCastom{
    Btn_text:React.ReactNode,
    ClassNameBtn:string,
    type: "submit" | "reset" | "button",
    Click?:()=>void,
    // status?:'true' | 'false',
    disabled?: boolean,

}


function ButtonCastom({
                 Btn_text,
                 ClassNameBtn,
                 type,
                 Click,
                 disabled,
             }:forButtonCastom){

    return(
        <button
            className={ClassNameBtn}
            onClick={Click}
            type={type}
            disabled={disabled}>
            {Btn_text}
        </button>
    )
}

export default ButtonCastom