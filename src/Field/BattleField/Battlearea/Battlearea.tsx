import InputCastom from "../../../Ui-ux_components/InputCastom.tsx";
import {useAppDispatch, useAppSelector} from "../../../Store/hooks.ts";
import {useState} from "react";
import style from './battlearea.module.css'
import classNames from "classnames/bind";

const cx = classNames.bind(style)

function Battlearea() {

    const dispatch = useAppDispatch()

    const list = useAppSelector(state => state.defSlice.letersField)

    const inputClass = cx('inputCube')

    const [letters, setLetters] = useState(list)

    const changeValue = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.toUpperCase(); // Приводим к верхнему регистру

        setLetters(prevLetters => {
            const newLetters = [...prevLetters];
            newLetters[index] = newValue.slice(-1); // Берем только последний символ (для maxlength=1)
            return newLetters;
        });

        console.log(letters)
    }

    return (

        <div className={cx('battlefield')}>

            <div className={cx('battlefield_cube')}>
                {
                    letters.map((item: string, index: number) =>
                        <InputCastom
                            key={index}
                            className={inputClass}
                            maxlength={1}
                            onChange={changeValue(index)}
                        />
                    )
                }

            </div>
        </div>
    )
}

export default Battlearea;