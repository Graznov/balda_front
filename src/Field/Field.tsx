import classNames from "classnames/bind";
import styles from './field.module.css'
import {Outlet} from "react-router-dom";
import Header from "./Header/Header.tsx";


const cx = classNames.bind(styles);


function Field(){


    return(
        <div className={cx('field')}>

            <div className="container_width">
                <Header/>

                <Outlet/>

            </div>


        </div>
    )
}

export default Field
