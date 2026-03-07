import style from './battlefield.module.css'
import classNames from "classnames/bind";
import InputCube from "../../Ui-ux_components/InputCube.tsx";
import {useEffect, useState} from "react";

const cx = classNames.bind(style)

// const arr = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ','Б', 'А', 'Л', 'Д', 'А',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',]

function Battlefield(){



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


            <div className={cx('battlefield_cube')}>
                {/*<div className={cx('battlefield_cube_lineOne')}>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*</div>*/}
                {/*<div className={cx('battlefield_cube_lineOne')}>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*</div>*/}
                {/*<div className={cx('battlefield_cube_lineOne')}>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*</div>*/}
                {/*<div className={cx('battlefield_cube_lineOne')}>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*</div>*/}
                {/*<div className={cx('battlefield_cube_lineOne')}>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*    <InputCube className={inputClass} maxlength={1}/>*/}
                {/*</div>*/}

                {
                    letters.map((item, index) =>
                        <InputCube
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