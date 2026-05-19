import classNames from "classnames/bind";
import styles from './message.module.css'
import {useAppDispatch, useAppSelector} from "../../Store/hooks.ts";
import {setResetMessage} from "../../Store/messageSlise.ts";
import {useEffect} from "react";

const cx = classNames.bind(styles);

function Message() {

    const dispatch = useAppDispatch()

    const data = useAppSelector(state => state.messageSlise)

    console.log(`data: `, data)

    useEffect(() => {

        if(data.messageType)
            setTimeout(()=>{
                dispatch(setResetMessage())
            },3000)
    }, [data.messageType]);

    return(
        <div className={cx('message', {
            'message-visible':data.messageStatus,
            'message-error':data.messageType==='error',
        })}>
            <div className={cx('message_content')}>
                <p className={cx('message_content_top')}>
                    {data.messageHead}
                </p>
                <p className={cx('message_content_text')}>
                    {data.messageText}
                </p>
            </div>

        </div>
    )
}

export default Message;