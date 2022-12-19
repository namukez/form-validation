import './FormComponent.css'
import { useState } from 'react'

const FormComponent = ()=>{
    const[UserName,setUserName] =useState('')
    const[Email,setEmail] =useState('')
    const[Password,setPassword] =useState('')
    const[RePassword,setRePassword] =useState('')

    // Error Message
    const[ErrorUserName,setErrorUserName] = useState('')
    const[ErrorEmail,setErrorEmail] = useState('')
    const[ErrorPassword,setErrorPassword] = useState('')
    const[ErrorRePassword,setErrorRePassword] = useState('')

    const[UserNameColor,setUserNameColor] = useState('')
    const[EmailColor,setEmailColor] = useState('')
    const[PasswordColor,setPasswordColor] = useState('')
    const[RePasswordColor,setRePasswordColor] = useState('')

    const validateForm = (e)=> {
        e.preventDefault()

        if(UserName.length>8){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('Please fill Username unless 8 char')
            setUserNameColor('red')
        }

        if(Email.includes("@")){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('Incorrext email')
            setEmailColor('red')
        }        

        if(Password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('Please use complex password')
            setPasswordColor('red')
        }

        if(RePassword !="" && Password===RePassword){
            setErrorRePassword('')
            setRePasswordColor('green')
        }
        else{
            setErrorRePassword('Please fill same password')
            setRePasswordColor('red')
        }
    }

    return(
<div className="container">
    <form className="form" onSubmit={validateForm}>
        <h2>Register Form</h2>
        <div className="form-control">
            <label>Username</label>
            <input type="text" value={UserName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:UserNameColor}}/>
            <small style={{color:UserNameColor}}>{ErrorUserName}</small>
        </div>
        <div className="form-control">
            <label>email</label>
            <input type="text"value={Email} onChange={(e)=>setEmail(e.target.value)}style={{borderColor:EmailColor}}/>
            <small style={{color:EmailColor}}>{ErrorEmail}</small>
        </div>
        <div className="form-control">
            <label>password</label>
            <input type="password"value={Password} onChange={(e)=>setPassword(e.target.value)}style={{borderColor:PasswordColor}}/>
            <small style={{color:PasswordColor}}>{ErrorPassword}</small>
        </div>
        <div className="form-control">
            <label>confirm-password</label>
            <input type="password"value={RePassword} onChange={(e)=>setRePassword(e.target.value)}style={{borderColor:RePasswordColor}}/>
            <small>{ErrorRePassword}</small>
        </div>
        <button type="summit">Register</button>
    </form>
</div>

    )
}
export default FormComponent