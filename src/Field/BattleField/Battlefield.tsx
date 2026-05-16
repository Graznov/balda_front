import style from './battlefield.module.css'
import classNames from "classnames/bind";
import InputCastom from "../../Ui-ux_components/InputCastom.tsx";
import {useEffect, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import LinkCastom from "../../Ui-ux_components/LinkCastom.tsx";
import AddWord from "../AddWord/AddWord.tsx";
import {useAppDispatch, useAppSelector} from "../../Store/hooks.ts";
import Message from "../message/Message.tsx";

const cx = classNames.bind(style)


function Battlefield(){

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const list = useAppSelector(state => state.defSlice.letersField)

    const startWord = useAppSelector(state => state.defSlice.startWord)

    useEffect(()=>{
        console.log(`startWord: ${startWord}`)

        if(startWord.length) {
            navigate('/playarea/game')
        } else {
            navigate('/playarea/addword')
        }
    },[startWord])




    //
    // const linksStyle = cx('link')
    // const inputClass = cx('inputCube')

    const [letters, setLetters] = useState(list)

    useEffect(() => {
        console.log('Состояние обновилось:', letters);
    }, [letters]); // Сработает при каждом изменении letters

    // const changeValue = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const newValue = event.target.value.toUpperCase(); // Приводим к верхнему регистру
    //
    //     setLetters(prevLetters => {
    //         const newLetters = [...prevLetters];
    //         newLetters[index] = newValue.slice(-1); // Берем только последний символ (для maxlength=1)
    //         return newLetters;
    //     });
    //
    //     console.log(letters)
    // }

    return (
        <div className={cx('battlefield')}>

            <Outlet/>



        </div>
    )
}

export default Battlefield