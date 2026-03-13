import classNames from "classnames/bind"
import style from './addword.module.css'
import InputCastom from "../../Ui-ux_components/InputCastom.tsx";
import ButtonCastom from "../../Ui-ux_components/ButtonCastom.tsx";
import {useAppDispatch, useAppSelector} from "../../Store/hooks.ts";
import {useState} from "react";

const cx = classNames.bind(style)


function AddWord() {

    const dispatch = useAppDispatch()

    const start = useAppSelector(state => state.defSlice.playerOne.startWord.status)

    const [startWord, setStartWord] = useState('')

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {


        console.log(e.target.value.toUpperCase())

        setStartWord(e.target.value)

    }

    const validateRussianWordStrict = (startWord: string): boolean => {
        console.log('PushBtn')

        // Без trim() - пробелы в начале или конце сразу вернут false
        // if (startWord.length === 0) return false;
        // return /^[а-яё]+$/i.test(startWord); // i - флаг, который как раз игнорирует регистр

        if (startWord.length === 0) console.log('Пустое поле')
        console.log(/^[а-яё]+$/i.test(startWord))
    };



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
                        Click={validateRussianWordStrict}/>
                </div>
                    :
                <div className={cx('addWord')}>Ждите пока второй игрок выберет слово</div>
        )
    )
}

export default AddWord