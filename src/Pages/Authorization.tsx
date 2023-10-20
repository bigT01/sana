import { LogoIcon2X } from "../Icons";
import React, {useEffect, useState} from "react";
import {MdAlternateEmail} from "react-icons/md";
import {LuKeyRound} from "react-icons/lu";
import {VscEye, VscEyeClosed} from "react-icons/vsc";
import {AiOutlineUser} from "react-icons/ai";
import {PiStudentBold} from "react-icons/pi";
import {FaChalkboardTeacher} from "react-icons/fa";
import axios from "../Utils/axios";

const Authorization = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowPasswordConfirm, setIsShowPasswordConfirm] = useState(false)

    const [role, setRole] = useState<string>('teacher')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const [error, setError] = useState(false)


    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(event.target.value);
    };

    useEffect(() => {
        if(password !== passwordConfirmation){
            setError(true)
        } else {
            setError(false)
        }

    }, [passwordConfirmation]);

    const SubmitHandler = () => {
        if(isLogin){
            axios.post('/auth/', {
                email: email,
                password: password,
            })
                .then((response) => {
                    console.log('Data:', response.data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } else {
            axios.post('/register/', {
                email: email,
                password: password,
                user_name: fullName,
                sure_name: fullName,
                role: role === 'teacher' ? 'Course teacher' : 'Learning user'
            })
                .then((response) => {
                    console.log('Data:', response.data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }

    }

    return(
        <div className="w-screen h-screen bg-secondaryCyan flex justify-center items-center">
            <form className="flex flex-col items-center gap-4 w-3/12" onSubmit={() => {console.log("hello")}}>
                <LogoIcon2X/>
                <div className="rounded-lg w-full ">
                    <div className="flex gap-1 mb-1">
                        <button type="button" className={`w-6/12 py-6 ${isLogin? 'text-secondaryCyan' : "text-totalWhite"} text-xl ${isLogin? 'bg-white' : "bg-secondaryCyan"} flex justify-center rounded-tl-md font-bold`} style={{borderTop: !isLogin ? '1px solid white' : '', borderLeft: !isLogin ?'1px solid white' : ''}} onClick={() => {setIsLogin(true)}}>Login</button>
                        <button type="button" className={`w-6/12 py-6 ${isLogin? 'text-totalWhite' : "text-secondaryCyan"} text-xl ${isLogin? 'bg-secondaryCyan' : "bg-white"} flex justify-center rounded-tr-md font-bold`} style={{borderTop: !isLogin ?'' : '1px solid white', borderRight: !isLogin ?'' : '1px solid white'}} onClick={() => {setIsLogin(false)}}>Sign in</button>
                    </div>
                    <div className="bg-totalWhite py-4 w-full rounded-b-md flex flex-col items-center gap-2">

                        {/*full name*/}
                        {!isLogin && <div className="w-7/12 rounded-md flex gap-2 p-2" style={{border: '1px solid #000000'}}>
                            <AiOutlineUser size={24}/>
                            <input type="text" placeholder="full name" className="w-10/12" value={fullName} onChange={e => setFullName(e.target.value)}/>
                        </div>}

                        {/*email*/}
                        <div className="w-7/12 rounded-md flex gap-2 p-2" style={{border: '1px solid #000000'}}>
                            <MdAlternateEmail size={24}/>
                            <input type="email" placeholder="email" className="w-10/12" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>

                        {/*password*/}
                        <div className="w-7/12 rounded-md flex gap-2 py-2 pl-2 pr-2" style={{border: '1px solid #000000'}}>
                            <LuKeyRound size={24}/>
                            <input type={`${isShowPassword ? "text" : "password"}`} placeholder="password" className="w-8/12" value={password} onChange={e => setPassword(e.target.value)}/>
                            <button type="button" onClick={() => {setIsShowPassword(!isShowPassword)}}>
                                {isShowPassword ? <VscEye size={24} style={{marginLeft: "100%"}}/> : <VscEyeClosed size={24} style={{marginLeft: "100%"}}/>}
                            </button>
                        </div>

                        {/*password confirmation*/}
                        {!isLogin && <div className="w-7/12 rounded-md flex gap-2 py-2 pl-2 pr-2" style={{border: `1px solid ${error ? '#ff0a00' : '#000000'}`}}>
                            <LuKeyRound size={24}/>
                            <input type={`${isShowPasswordConfirm ? "text" : "password"}`} placeholder="confirm password" className="w-8/12" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)}/>
                            <button type="button" onClick={() => {setIsShowPasswordConfirm(!isShowPasswordConfirm)}}>
                                {isShowPasswordConfirm ? <VscEye size={24} style={{marginLeft: "100%"}}/> : <VscEyeClosed size={24} style={{marginLeft: "100%"}}/>}
                            </button>
                        </div>}

                        {/*role*/}
                        {!isLogin && <div className="w-7/12 rounded-md flex gap-2 py-2 pl-2 pr-2" style={{border: '1px solid #000000'}}>
                            {role === 'student' ? <PiStudentBold size={24}/> : <FaChalkboardTeacher size={24}/>}
                            <select name="role" id="role" defaultValue={role} className="w-10/12" onChange={handleRoleChange}>
                                <option value="teacher">teacher</option>
                                <option value="student">student</option>
                            </select>
                        </div>}

                        <button type="button" className="py-2 bg-secondaryCyan text-totalWhite rounded-xl w-7/12" onClick={() => SubmitHandler()}>Submit</button>

                    </div>

                </div>
            </form>
        </div>
    )
}

export default Authorization
