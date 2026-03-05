import classNames from "classnames/bind";
import styles from './field.module.css'
import {NavLink, Outlet} from "react-router-dom";
import Header from "./Header/Header.tsx";


const cx = classNames.bind(styles);


function Field(){


    return(
        <div className={cx('field')}>

            <div><Header/></div>

            <div>
                <div>
                    {/*<TopCont/>*/} FIELD
                    <NavLink to='/playarea'>start game</NavLink>
                </div>

                <Outlet/>

            </div>

        </div>
    )
}

export default Field
