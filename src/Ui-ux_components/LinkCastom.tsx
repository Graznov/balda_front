import {NavLink} from "react-router-dom";

interface forNavlink{
    // Link_text:React.ReactNode,
    Link_text:string
    Link_path:string
    Link_ClassName:string,
}


function LinkCastom({
                 Link_text,
                 Link_ClassName,
                 Link_path
             }:forNavlink){

    return(
        <NavLink
            to={Link_path}
            className={Link_ClassName}
        >
            {Link_text}
        </NavLink>
    )
}

export default LinkCastom