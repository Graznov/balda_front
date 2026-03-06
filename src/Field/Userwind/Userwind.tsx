import style from './userwind.module.css'
import classNames from "classnames/bind";

const cx = classNames.bind(style)

function Userwind() {

    return (
        <div className={cx('Userwind')}>

            <div className={cx('container_width')}>
                USERWIND
            </div>

        </div>
    )
}

export default Userwind