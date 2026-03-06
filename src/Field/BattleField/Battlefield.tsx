import style from './battlefield.module.css'
import classNames from "classnames/bind";
import InputCube from "../../Ui-ux_components/InputCube.tsx";

const cx = classNames.bind(style)

const arr = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ','Б', 'А', 'Л', 'Д', 'А',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',]

function Battlefield(){

    const inputClass = cx('inputCube')

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
                    arr.map(item =>
                        <InputCube className={inputClass} maxlength={1} value={item}/>
                    )
                }

            </div>
        </div>
    )
}

export default Battlefield