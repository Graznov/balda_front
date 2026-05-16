import classNames from "classnames/bind";
import styles from './message.module.css'

const cx = classNames.bind(styles);

function Message() {


    return(
        <div className={cx`message`}>
            <div className={cx('message_content')}>
                <p className={cx('message_content_top')}>
                    lorem ipsum dolor
                </p>
                <p className={cx('message_content_text')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

        </div>
    )
}

export default Message;