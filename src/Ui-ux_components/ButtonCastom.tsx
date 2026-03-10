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
             }:forButtonCastom){

    return(
        <button
            className={ClassNameBtn}
            onClick={Click}
            type={type}>
            {Btn_text}
        </button>
    )
}

export default ButtonCastom