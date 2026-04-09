import style from './userwind.module.css'
import classNames from "classnames/bind";
import {LogInWind} from "../LogInWind/LogInWind.tsx";

const cx = classNames.bind(style)

function Userwind() {

    return (
        <div className={cx('Userwind')}>

            <LogInWind/>

            <div className={cx('container_width')}>
                USERWIND
            </div>

        </div>
    )
}

export default Userwind