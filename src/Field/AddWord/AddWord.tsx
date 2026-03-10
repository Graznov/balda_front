import classNames from "classnames/bind"
import style from './addword.module.css'
import InputCastom from "../../Ui-ux_components/InputCastom.tsx";
import ButtonCastom from "../../Ui-ux_components/ButtonCastom.tsx";

const cx = classNames.bind(style)

function addWord() {

    return(
        <div className={cx('addWord')}>
            <div className={cx('addWord_zag')}>
                Выберетие слово из 5 букв
            </div>

            <InputCastom
                className={cx('addWord_input')}
                maxlength={5}
                onChange={()=>{}}/>

            <ButtonCastom
                Btn_text={'Подтвердить'}
                ClassNameBtn={cx('addWord_btn')}
                type={'button'}/>
        </div>
    )
}

export default addWord