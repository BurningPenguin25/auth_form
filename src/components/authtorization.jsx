import React,{useState,useEffect} from "react";
import AuthStyle from './authtorization.css'


import {useNavigate} from "react-router-dom";
import axios from "axios";


function Auth(){
    const navigate = useNavigate() // ???

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    useEffect(()=>{
        if (error) {
            setTimeout((error) => {
               setError(undefined)
            }, 1000)
        }
    },[error])



    function SendPL(){
        if(login.length === 0){
            setLoginError('необходимо ввести логин') // пустое поле
            console.log(loginError)
        }
        if(password.length === 0){
            setPasswordError('необходимо ввести пароль') // пустое поле
        }
        if(login.length === 0 || password.length === 0){
            return;
        }


    axios.post('/login', { //какой url ?
            password: password,
            login: login,
        }, {
            headers: {
                'content-type': '/path'} //какой content-type? (что должно быть) ?
}).then(()=>{
        navigate('/main') // на какую страницу нас перебросит после ввода пароля и логина
    }).catch((err)=>{
if(err.response.status === 401){
    setError('ошибка - неверный пароль и логин ') // ошибка пароля
}
});
    }

    const emailCheck = (em) =>{
        setLogin(em.target.value)
        const mail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!mail.test(String(em.target.value).toLowerCase())){
            setLoginError('Некорректный email')
        } else{
            setLoginError('')
        }
    }

    const passwordCheck = (pa) =>{
        setPassword(pa.target.value)
        const password = /^[a-zA-Z0-9!@#$%^&*]{6,10}$/;
     if(!password.test(String(pa.target.value).toLowerCase())){
    setPasswordError('введите пароль от 6 до 10 симаолов')
         } else {
         setPasswordError('')
     }
    }


    return(
        <div id="range5">
            <div className="outer">
                <div className="middle">
                    <div className="inner">
                        <div className="login-wr">
                            <h2>Вход</h2>

                                {(loginError) && <div style={{color: 'red'}}> {loginError} </div>}
                                <input   placeholder="Login"  type={'text'} id={'login'} label={'login'}  onBlur={(e)=>{
                                    setLoginError('');
                                    setLogin(e.target.value)
                                    emailCheck(e)
                                }}/>

                                {(passwordError)&& <div style={{color: 'red'}}>{passwordError}</div>}
                                <input placeholder="Password"  type={'password'} id={'password'} label={'password'}
                                        onBlur={(e)=>{
                                    setLoginError('');
                                    setPassword(e.target.value)
                                    passwordCheck(e)
                                }}/>

                                {(!error) && <button type={'submit'} onClick={SendPL}> отправить </button>}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Auth

