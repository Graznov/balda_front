import classNames from "classnames/bind";
import styles from './field.module.css'
import {Outlet} from "react-router-dom";
import Header from "./Header/Header.tsx";
import Message from "./message/Message.tsx";
import {Secret} from "../mess/Mess.ts";


const cx = classNames.bind(styles);


function Field(){


Secret()

    // document.addEventListener('keyup', (event) => {
    //     console.log('Клавиша отпущена:', event.key);
    // });

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
