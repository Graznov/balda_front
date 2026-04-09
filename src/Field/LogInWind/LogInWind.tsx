import styles from "./logInWind.module.css";

import classNames from "classnames/bind";
import {useState} from "react";

import Eye from '/src/assets/eye.svg?react'
// import Close from '/src/assets/close.svg?react'
import EyeHidden from '/src/assets/eye-hidden.svg?react'
// import {useNavigate} from "react-router-dom";
// import {useAppDispatch} from "../../../Store/hooks.ts";



const cx = classNames.bind(styles);


export const LogInWind = () => {
    // const dispatch = useAppDispatch()
    // const navigate = useNavigate()

    const [isLoginVisible, setIsLoginVisible] = useState(true);
    const [passVisible, setPassVisible] = useState(false);




    return (
        <div className={cx("login-page")}>
            <div className={cx("form")}>
                <div className={cx("register-form", {
                    'register-form_show': isLoginVisible,
                })}>

                    <input
                        className={cx('input',
                            // {'error-name': nameError}
                        )}
                        onChange={(event) => {
                            // setFormRegistration({
                            //     ...formRegistration,
                            //     userName: event.target.value
                            // })

                            console.log(event.target.value);
                        }}
                        // value={'formRegistration.userName'}
                        type="text"
                        placeholder="Имя"/>

                    {/*<input*/}
                    {/*    className={cx('input', {'error-email':error.email})}*/}
                    {/*    onChange={(event)=>{*/}
                    {/*        setFormRegistration({*/}
                    {/*            ...formRegistration,*/}
                    {/*            userEmail: event.target.value*/}
                    {/*        })*/}
                    {/*    }}*/}
                    {/*    value={formRegistration.userEmail}*/}
                    {/*    type="text"*/}
                    {/*    placeholder="email address"/>*/}

                    <div className={cx('login-form_passContainer')}>

                        <input
                            onChange={(event) => {
                                console.log(event.target.value);
                            }}
                            // value={formRegistration.password_1}
                            type={(passVisible) ? "text" : "password"}
                            placeholder="Пароль"/>

                        <button
                            className={cx('pass-visible-switch')}
                            onClick={()=>setPassVisible(!passVisible)}
                        >
                            {(passVisible) ? <Eye/> : <EyeHidden/>}
                            {/*'text'*/}

                            {/*<Eye/>*/}
                        </button>

                    </div>
                    <div className={cx('login-form_passContainer')}>
                        <input
                            className={cx(
                                // 'passTwo-red': formRegistration.password_1 !== formRegistration.password_2
                                'passTwo-red')}
                            onChange={(event) => {
                                console.log(event.target.value);
                            }}
                            value={''}
                            // type={(passVisible) ? "text" : "password"}
                            placeholder="Подтверждение пароля"/>
                    </div>


                    <button
                        // onClick={}
                        className={cx('form-button')}>
                        создать
                    </button>
                    <p className={cx("message")}>
                        Уже зарегестрирован?
                        <button onClick={() => {
                            // setFormLogIn(FORM_LOGIN)
                            // setFormRegistration(FORM_REGISTRATION)
                            setIsLoginVisible(!isLoginVisible)

                        }}>Войти</button>
                    </p>
                </div>
                <div className={cx("login-form", {
                    'login-form_none': isLoginVisible
                })}>

                    <input
                        // className={cx({'error': error.name})}
                        // value={formLogIn.name}
                        onChange={(event) => {
                            // setFormLogIn({
                            //     ...formLogIn,
                            //     name: event.target.value
                            // })
                            console.log(event.target.value);
                        }}
                        type="text"
                        placeholder="Имя"/>
                    <div className={cx('login-form_passContainer')}>
                        <input
                            // className={cx({'error': error.password})}
                            // value={formLogIn.password}
                            onChange={(event) => {
                                // setFormLogIn({
                                //     ...formLogIn,
                                //     password: event.target.value
                                // })
                                console.log(event.target.value);
                            }}
                            type={(passVisible) ? "text" : "password"}
                            placeholder="Пароль"/>
                        <button className={cx('pass-visible-switch')}
                                onClick={() => setPassVisible(!passVisible)}
                        >
                            {(passVisible) ? <Eye/> : <EyeHidden/>}
                        </button>
                    </div>

                    <button
                        // onClick={handleSubmit}
                        className={cx('form-button')}>Войти
                    </button>
                    <p className={cx("message")}>
                        Нет аккаунта?
                        <button onClick={() => {
                            // setFormLogIn(FORM_LOGIN)
                            // setFormRegistration(FORM_REGISTRATION)
                            setIsLoginVisible(!isLoginVisible)

                            console.log('CLICK')
                        }}>Зарегестрироваться</button>
                    </p>
                </div>
                <button
                    className={cx('zachem')}
                    // onClick={() => {setZachemVisible(true)}}
                >
                    Зачем регистрироваться?
                </button>

            </div>

            <div className={cx('zachem-text',{
                // 'zachem-text_visible':zachemVisible
            })}>
                <button
                    // onClick={()=>{setZachemVisible(false)}}
                >Close</button>
                <div className={cx('zachem-text_title')}>Зарегестрированные пользователи получают возможность:</div>
                <div className={cx('zachem-text_content')}>видеть статистику решения экзаменационных билетов</div>
                <div className={cx('zachem-text_content')}>добавлять вопросы в избранное</div>
                {/*<div className={cx('zachem-text_content')}>марафон</div>*/}
                <div className={cx('zachem-text_content')}>вопросы в которых были допущены ошибки будут сохраняться для последующего повторения</div>
                <div className={cx('zachem-text_content')}>входить в свою учетную запись с разных устройств</div>
                <div className={cx('zachem-text_content_cookie')}>Предупреждине мелким шрифтом: на сайте используются файлы cookie. Они используются исключительно для обеспечения базового функционала сайта. Мы не осуществляем сбор аналитической информации о действиях пользователей на сайте</div>

            </div>

        </div>
    )
}