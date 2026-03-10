import style from './battlefield.module.css'
import classNames from "classnames/bind";
import InputCastom from "../../Ui-ux_components/InputCastom.tsx";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import LinkCastom from "../../Ui-ux_components/LinkCastom.tsx";
import AddWord from "../AddWord/AddWord.tsx";

const cx = classNames.bind(style)

// const arr = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ','Б', 'А', 'Л', 'Д', 'А',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',]

function Battlefield(){


    const linksStyle = cx('link')

    const inputClass = cx('inputCube')

    const [letters, setLetters] = useState([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ','Б', 'А', 'Л', 'Д', 'А',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',])

    useEffect(() => {
        console.log('Состояние обновилось:', letters);
    }, [letters]); // Сработает при каждом изменении letters

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

            <LinkCastom
                Link_path={'addword'}
                Link_ClassName={linksStyle}
                Link_text={'Add word'}/>

            <Outlet/>


            <div className={cx('battlefield_cube')}>
                {/*<div className={cx('battlefield_cube_lineOne')}>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*</div>*/}
                {/*<div className={cx('battlefield_cube_lineOne')}>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*</div>*/}
                {/*<div className={cx('battlefield_cube_lineOne')}>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*</div>*/}
                {/*<div className={cx('battlefield_cube_lineOne')}>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*</div>*/}
                {/*<div className={cx('battlefield_cube_lineOne')}>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*    <InputCastom className={inputClass} maxlength={1}/>*/}
                {/*</div>*/}

                {
                    letters.map((item, index) =>
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

export default Battlefield