import style from './header.module.css'
import classNames from "classnames/bind";
import LinkCastom from "../../Ui-ux_components/LinkCastom.tsx";

const cx = classNames.bind(style)

function Header(){

    const linksStyle = cx('link')

    return(
        <div className={cx('header')}>

            <div className={cx("container_width")}>

                <ul className={cx('header__list')}>
                    <li>
                        <LinkCastom
                            Link_path={'/playarea'}
                            Link_ClassName={linksStyle}
                            Link_text={'Start'}/>
                    </li>
                    {/*<li>*/}
                    {/*    <LinkCastom*/}
                    {/*        Link_path={'/playarea/addword'}*/}
                    {/*        Link_ClassName={linksStyle}*/}
                    {/*        Link_text={'Add word'}/>*/}
                    {/*</li>*/}
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
                            Link_text={'Пять'}/>
                    </li>
                </ul>

                <LinkCastom
                    Link_text={'User'}
                    Link_path={'/user'}
                    Link_ClassName={linksStyle}/>

            </div>


        </div>
    )
}

export default Header;