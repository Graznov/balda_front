import styles from "./logInWind.module.css";

import classNames from "classnames/bind";
import {useEffect, useMemo, useState} from "react";

import Eye from '/src/assets/eye.svg?react'
// import Close from '/src/assets/close.svg?react'
import EyeHidden from '/src/assets/eye-hidden.svg?react'
// import {useNavigate} from "react-router-dom";
// import {useAppDispatch} from "../../../Store/hooks.ts";



const cx = classNames.bind(styles);



export const LogInWind = () => {
    // const dispatch = useAppDispatch()
    // const navigate = useNavigate()
    // interface UserData {
    //     name: string;
    //     password: string;
    // }
    const userDataSTOK={
        name:'',
        password1:'',
        password2:'',
    }
    const [isLoginVisible, setIsLoginVisible] = useState(true);
    const [passVisible, setPassVisible] = useState(false);

    const [userData, setUserData] = useState(userDataSTOK);

    const btnDisable = useMemo(() => {
        return !(
            userData.name.length > 5 &&
            userData.password1.length > 5 &&
            userData.password1 === userData.password2
        );
    }, [userData.name, userData.password1, userData.password2]);

    const btn2Disable = useMemo(() => {
        return !(
            userData.name.length > 5 &&
            userData.password1.length > 5
        );
    }, [userData.name, userData.password1]);

    const passTwoRed = useMemo(()=>{
        return !(userData.password1===userData.password2);
    }, [userData.password1, userData.password2]);

    useEffect(() => {
        console.log(`userData: `, userData)

    }, [userData]);


    // setUserData(userData)


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
                        value={userData.name}
                        onChange={(event) => {

                            const name = event.target.value.replace(/[^A-Za-zА-Яа-я_0-9-]/g, '');                            // setUserData({...userData, name});

                            setUserData({
                                ...userData,
                                name: name
                            })

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
                                // console.log(event.target.value);
                                console.log(`userData: `, userData)

                                setUserData({
                                    ...userData,
                                    password1: event.target.value,
                                })

                            }}
                            value={userData.password1}
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
                            className={cx({'passTwo-red': passTwoRed})}
                            onChange={(event) => {
                                console.log(event.target.value);
                                setUserData({
                                    ...userData,
                                    password2: event.target.value,
                                })

                            }}
                            value={userData.password2}
                            type={(passVisible) ? "text" : "password"}
                            placeholder="Подтверждение пароля"/>
                    </div>


                    <button
                        onClick={()=>{
                            console.log(`click CREATE,\nUserName: ${userData.name},\nUserPassword: ${userData.password1}`);
                        }}
                        disabled={btnDisable}
                        className={cx('form-button',{
                            'form-button_disabled':btnDisable
                        })}>
                        создать
                    </button>
                    <p className={cx("message")}>
                        Уже зарегестрирован?
                        <button onClick={() => {
                            setIsLoginVisible(!isLoginVisible)
                            setUserData(userDataSTOK)
                        }}>Войти</button>
                    </p>
                </div>
                <div className={cx("login-form", {
                    'login-form_none': isLoginVisible
                })}>

                    <input
                        // className={cx({'error': error.name})}
                        value={userData.name}
                        onChange={(event) => {
                            // setFormLogIn({
                            //     ...formLogIn,
                            //     name: event.target.value
                            // })
                            const name = event.target.value.replace(/[^A-Za-zА-Яа-я_0-9-]/g, '');                            // setUserData({...userData, name});

                            setUserData({
                                ...userData,
                                name: name,
                            })
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
                                setUserData({
                                    ...userData,
                                    password1: event.target.value,
                                })
                                console.log(event.target.value);
                            }}
                            value={userData.password1}
                            type={(passVisible) ? "text" : "password"}
                            placeholder="Пароль"/>
                        <button className={cx('pass-visible-switch')}
                                onClick={() => setPassVisible(!passVisible)}
                        >
                            {(passVisible) ? <Eye/> : <EyeHidden/>}
                        </button>
                    </div>

                    <button
                        onClick={()=>{
                            console.log(`click ENTER,\nUserName: ${userData.name},\nUserPassword: ${userData.password1}`);
                        }}
                        disabled={btn2Disable}
                        className={cx('form-button',{
                            'form-button_disabled':btn2Disable

                        })}>Войти
                    </button>
                    <p className={cx("message")}>
                        Нет аккаунта?
                        <button onClick={() => {

                            setIsLoginVisible(!isLoginVisible)
                            setUserData(userDataSTOK)

                            console.log('CLICK')
                        }}>Зарегестрироваться</button>
                    </p>
                </div>
                {/*<button*/}
                {/*    className={cx('zachem')}*/}
                {/*    // onClick={() => {setZachemVisible(true)}}*/}
                {/*>*/}
                {/*    Зачем регистрироваться?*/}
                {/*</button>*/}

            </div>

            {/*<div className={cx('zachem-text',{*/}
            {/*    // 'zachem-text_visible':zachemVisible*/}
            {/*})}>*/}
            {/*    <button*/}
            {/*        // onClick={()=>{setZachemVisible(false)}}*/}
            {/*    >Close</button>*/}
            {/*    <div className={cx('zachem-text_title')}>Зарегестрированные пользователи получают возможность:</div>*/}
            {/*    <div className={cx('zachem-text_content')}>видеть статистику решения экзаменационных билетов</div>*/}
            {/*    <div className={cx('zachem-text_content')}>добавлять вопросы в избранное</div>*/}
            {/*    /!*<div className={cx('zachem-text_content')}>марафон</div>*!/*/}
            {/*    <div className={cx('zachem-text_content')}>вопросы в которых были допущены ошибки будут сохраняться для последующего повторения</div>*/}
            {/*    <div className={cx('zachem-text_content')}>входить в свою учетную запись с разных устройств</div>*/}
            {/*    <div className={cx('zachem-text_content_cookie')}>Предупреждине мелким шрифтом: на сайте используются файлы cookie. Они используются исключительно для обеспечения базового функционала сайта. Мы не осуществляем сбор аналитической информации о действиях пользователей на сайте</div>*/}

            {/*</div>*/}

        </div>
    )
}