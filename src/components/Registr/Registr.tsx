import classNames from "classnames/bind";
import styles from './registr.module.css'
import {Outlet} from "react-router-dom";


const cx = classNames.bind(styles);


function Registr(){


    return(
        <div className={cx('registr_container',{
            // 'registr_container_dark':theme === 'dark'
        })}>

            <div className={cx('registr_container_left')}>
                <div>
                    {/*<TopCont/>*/} Registr
                </div>

                <Outlet/>

            </div>

            <div className={cx('registr_container_right')}>

                {/*<RightLogoSignUp_Login/>*/}
            </div>



        </div>
    )
}

export default Registr