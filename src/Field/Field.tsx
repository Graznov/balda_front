import classNames from "classnames/bind";
import styles from './field.module.css'
import {Outlet} from "react-router-dom";
import Header from "./Header/Header.tsx";


const cx = classNames.bind(styles);


function Field(){


    return(
        <div>

            <div><Header/></div>

            <div>
                <div>
                    {/*<TopCont/>*/} FIELD
                </div>

                <Outlet/>

            </div>

        </div>
    )
}

export default Field
