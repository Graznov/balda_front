import style from './header.module.css'
import classNames from "classnames/bind";
import LinkCastom from "../../Ui-ux_components/LinkCastom.tsx";
import {useAppDispatch, useAppSelector} from "../../Store/hooks.ts";
import {setDataMessage, setResetMessage} from "../../Store/messageSlise.ts";

const cx = classNames.bind(style)

function Header(){

    const dispatch = useAppDispatch()

    const UserName = useAppSelector(state => state.defSlice.playerOne.name)


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
                    <li
                        onClick={()=>{
                            console.log('clicked')
                            dispatch(setDataMessage({
                                messageStatus:true,
                                messageHead: 'Заголовок сообщения ошибки',
                                messageText: 'Текст сообщения текст сообщения текст сообщения текст сообщения',
                                messageType:"error",}))

                            // setTimeout(()=>{
                            //     dispatch(setResetMessage())
                            // },3000)
                        }}
                    >
                        <LinkCastom
                            Link_path={'/'}
                            Link_ClassName={linksStyle}
                            Link_text={'Four'}/>
                    </li>
                    <li
                        onClick={()=>{
                            console.log('clicked')
                            dispatch(setDataMessage({
                                messageStatus:true,
                                messageHead: 'Заголовок сообщения',
                                messageText: 'Текст сообщения текст сообщения текст сообщения текст сообщения',
                                messageType:"info",}))

                            // setTimeout(()=>{
                            //     dispatch(setResetMessage())
                            // },3000)
                        }}>
                        <LinkCastom

                            Link_path={'/'}
                            Link_ClassName={linksStyle}
                            Link_text={'Пять'}/>

                    </li>
                </ul>

                <LinkCastom
                    Link_text={(UserName.length)?UserName:'Login'}
                    Link_path={'/user'}
                    Link_ClassName={linksStyle}/>

            </div>


        </div>
    )
}

export default Header;