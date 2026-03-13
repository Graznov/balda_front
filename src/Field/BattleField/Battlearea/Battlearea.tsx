import InputCastom from "../../../Ui-ux_components/InputCastom.tsx";
import {useAppDispatch, useAppSelector} from "../../../Store/hooks.ts";
import {useEffect, useState} from "react";
import style from './battlearea.module.css'
import classNames from "classnames/bind";
import {useNavigate} from "react-router-dom";

const cx = classNames.bind(style)

function Battlearea() {

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const list = useAppSelector(state => state.defSlice.letersField)

    const inputClass = cx('inputCube',{
        'inputCube_gray':true
    })

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

    const pushed = ()=>{
        console.log('Pushed')
        navigate('/')
    }



    return (

        <div className={cx('battlefield')}>

            <button onClick={pushed}>PushMe</button>

            <div className={cx('battlefield_cube')}>
                {
                    letters.map((item: string, index: number) =>
                        <InputCastom
                            key={index}
                            value={item}
                            disable={!!(item)}
                            // onClick={}
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