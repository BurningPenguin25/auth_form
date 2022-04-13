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
            setLoginError('необходимо ввести логин')
        }
        if(password.length === 0){
            setPasswordError('необходимо ввести пароль')
        }
        if(login.length === 0 || password.length === 0){
            return;
        }
    }

    axios.post('/login', {
            password: password,
            login: login,
        }, {
            headers: {
                'content-type': '/path'}
}).then((response)=>{
        // dispatch() // ???
        navigate('/main') // на какую страницу нас перебросит после ввода пароля и логина
    }).catch((err)=>{
if(err.response.status === 401){
    setError('ошибка - неверный пароль и логин ')
}
});


    return(
        <div>
       <h2>Регистрация</h2>
<form>
            <input error={loginError !== '' ? loginError : 'текст?'} type={'text'} id={'login'} label={'login'}  onChange={(e)=>{
                setLoginError('');
                setLogin(e.target.value)
            }}/>
            <input error={passwordError !== '' ? loginError : 'текст?'}   type={'password'} id={'password'} label={'password'} onChange={(e)=>{
                setLoginError('');
                setPassword(e.target.value)
            }}/>
            <a href={'/path'}>восстановить</a>

            {error && <div>{error}</div>}
            {!error && <button onClick={SendPL}> отправить </button>}
</form>
        </div>


    )

}
//  из error={loginError !== ''}
// в error={loginError !== '' ? loginError : 'текст?'} //
export default Auth