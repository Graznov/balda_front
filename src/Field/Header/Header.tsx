import style from './header.module.css'
import classNames from "classnames/bind";

const cx = classNames.bind(style)

function Header(){

    return(
        <div className={cx('header')}>HEADER</div>
    )
}

export default Header;