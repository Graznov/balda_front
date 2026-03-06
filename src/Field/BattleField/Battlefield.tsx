import style from './battlefield.module.css'
import classNames from "classnames/bind";

const cx = classNames.bind(style)

function Battlefield(){

    return (
        <div className={cx('battlefield', 'container_width')}>

        </div>
    )
}

export default Battlefield