import classNames from "classnames/bind";
import styles from './field.module.css'
import {Outlet} from "react-router-dom";
import Header from "./Header/Header.tsx";
import Message from "./message/Message.tsx";


const cx = classNames.bind(styles);


function Field(){


    return(
        <div className={cx('field')}>

            <Message/>

            <div className="container_width">
                <Header/>

                <Outlet/>

            </div>


        </div>
    )
}

export default Field
