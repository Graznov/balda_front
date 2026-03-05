import style from './header.module.css'
import classNames from "classnames/bind";
import LinkCastom from "../../Ui-ux_components/LinkCastom.tsx";

const cx = classNames.bind(style)

function Header(){

    const linksStyle = cx('link')

    return(
        <div className={cx('header')}>

            <ul>
                <li>
                    <LinkCastom
                        Link_path={'/'}
                        Link_ClassName={linksStyle}
                        Link_text={'One'}/>
                </li>
                <li>
                    <LinkCastom
                        Link_path={'/'}
                        Link_ClassName={linksStyle}
                        Link_text={'Two'}/>
                </li>
                <li>
                    <LinkCastom
                        Link_path={'/'}
                        Link_ClassName={linksStyle}
                        Link_text={'Three'}/>
                </li>
                <li>
                    <LinkCastom
                        Link_path={'/'}
                        Link_ClassName={linksStyle}
                        Link_text={'Four'}/>
                </li>
                <li>
                    <LinkCastom
                        Link_path={'/'}
                        Link_ClassName={linksStyle}
                        Link_text={'Five'}/>
                </li>
            </ul>

        </div>
    )
}

export default Header;