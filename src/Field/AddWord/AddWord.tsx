import classNames from "classnames/bind"
import style from './addword.module.css'
import InputCastom from "../../Ui-ux_components/InputCastom.tsx";
import ButtonCastom from "../../Ui-ux_components/ButtonCastom.tsx";
import {useAppDispatch, useAppSelector} from "../../Store/hooks.ts";
import {useState} from "react";
import {setStartWord} from "../../Store/defSlice.ts";

const cx = classNames.bind(style)


function AddWord() {

    const dispatch = useAppDispatch()

    const start = useAppSelector(state => state.defSlice.playerOne.playerSetStartWord)

    const [startWord, setWord] = useState('')

    const [btnDisabled, setBtnDisabled] = useState(true);

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {

        console.log(e.target.value.toUpperCase())

        setWord(e.target.value.toUpperCase())

        const cyrillicPattern = /^[А-Яа-яЁё]+$/;
        setBtnDisabled(!(e.target.value.length === 5 && cyrillicPattern.test(e.target.value)));


    }


    const pushBtn = ():void => {

        dispatch(setStartWord(startWord))
        console.log('push')

    }


    return(

        (
            start ?

                <div className={cx('addWord')}>
                    <div className={cx('addWord_zag')}>
                        Выберетие слово из 5 букв
                    </div>

                    <InputCastom
                        className={cx('addWord_input')}
                        maxlength={5}
                        onChange={changeInput}
                    />

                    <ButtonCastom
                        Btn_text={'Подтвердить'}
                        ClassNameBtn={cx('addWord_btn')}
                        type={'button'}
                        Click={pushBtn}
                        disabled={btnDisabled}
                        />


                </div>
                    :
                <div className={cx('addWord')}>Ждите пока второй игрок выберет слово</div>
        )
    )
}

export default AddWord