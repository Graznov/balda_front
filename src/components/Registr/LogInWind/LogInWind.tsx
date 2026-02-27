import styles from "./logInWind.module.css";

import classNames from "classnames/bind";
// import {useNavigate} from "react-router-dom";
// import {useAppDispatch} from "../../../Store/hooks.ts";



const cx = classNames.bind(styles);


export const LogInWind = () => {
    // const dispatch = useAppDispatch()
    // const navigate = useNavigate()


    return(

        <div className={cx('containerLogIn')}>

            <h3 className={cx('input_area_Zag', {
                // 'input_area_Zag_dark': theme === 'dark'
            })}>
                {/*{langMap.logIn}*/}LOGIN
            </h3>


            <form className={styles.input_area}>

                {/*<Input*/}
                {/*    value={formLogin.email}*/}
                {/*    name='email'*/}
                {/*    onBlur={e => blurHandler(e)}*/}
                {/*    onChange={changeEmail}*/}
                {/*    classNameContainer={styles.classNameContainer}*/}
                {/*    classNameLabel={ClassLabelEmail}*/}
                {/*    classNameInput={ClassInputEmail}*/}
                {/*    placeholder=''*/}
                {/*    type='email'*/}
                {/*    hiddenStr={langMap.logInWindHiddenEmail}*/}
                {/*    ClassDivError={cx('ClassDivError', {*/}
                {/*        ClassDivErrorVisibl: emailDirty*/}
                {/*    })}*/}
                {/*    message={emailError}*/}
                {/*    classNameBtn={styles.classInputBtn}*/}

                {/*/>*/}

                {/*<Input*/}
                {/*    name='passOne'*/}
                {/*    onBlur={e => blurHandler(e)}*/}
                {/*    onChange={changePassOne}*/}
                {/*    classNameContainer={styles.classNameContainer}*/}
                {/*    classNameLabel={ClassLabelPass}*/}
                {/*    classNameInput={ClassInputPass}*/}
                {/*    placeholder=''*/}
                {/*    type={isShown ? "text" : "password"}*/}
                {/*    hiddenStr={langMap.logInWindPassHidden}*/}
                {/*    ClassDivError={cx('ClassDivError', {*/}
                {/*        ClassDivErrorVisibl: passOneDirty*/}
                {/*    })}*/}
                {/*    message={passOneError}*/}

                {/*    onClickBtn={isShowChange}*/}
                {/*    src={adress}*/}
                {/*    classNameBtn={styles.classInputBtn}*/}
                {/*/>*/}

                {/*<Btn*/}
                {/*    ClassNameBtn={ClassBtn}*/}
                {/*    Btn_text={langMap.logInWindBtn}*/}
                {/*    type='button'*/}
                {/*    Click={clickEnter}*/}
                {/*    status={'true'}*/}
                {/*/>*/}

                {/*<div className={cx('toLogin', {*/}
                {/*    'toLogin_dark': theme === 'dark'*/}
                {/*})}>*/}
                {/*    {langMap.logInWinIDont}*/}
                {/*    <NavLink to={'/'}>*/}
                {/*        {langMap.logInWinRegistr}*/}
                {/*    </NavLink>*/}
                {/*</div>*/}

            </form>
        </div>
    )
}