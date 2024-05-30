import { useState } from "react";

function Form () {
    const [infos, setInfo] = useState([]);
    const [inputCode,setCode] = useState("")
    const codeHandler = (input) => {
        setCode(input.target.value);
    };

    const [inputPassword,setPassword] = useState("")
    const passwordHandler = (input) => {
        setPassword(input.target.value)
    }

    const [inputEmail,setEmail] = useState("")
    const emailHandler = (input) => {
        setEmail(input.target.value)
    }

    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const updateInfo = [
        ...infos,{
            code: inputCode,
            email: inputEmail,
            password: inputPassword
        }
    ]

    function infoHandler() {
        if (!inputCode.startsWith("NV")) {
            alert("Mã không đúng định dạng.")
        } else if (inputCode.length<8) {
            alert("Mã không được nhỏ hơn 8 ký tự.")
        } else if (inputCode.length > 18) {
            alert("Mã không được lớn hơn 18 ký tự.")
        } else if(!inputEmail) {
            alert("Email không được bỏ trống.")
        } else if (!validateEmail(inputEmail)) {
            alert("Email không đúng định dạng.")
        } else if (inputPassword.length < 8) {
            alert("Mật khẩu không được nhỏ hơn 8 ký tự")
        } else {
            setInfo(updateInfo)
            alert("Đăng ký thành công.")
        }
    }
    console.log(infos)
    return (
        <>
                <div>
                    <div htmlFor="code">Employee Code</div>
                    <input type="text" name="code" value={inputCode} onChange={codeHandler}  />
                </div>
                <div>
                    <div>Email</div>
                    <input type="text" value={inputEmail} onChange={emailHandler} />
                </div>
                <div>
                    <div>Password</div>
                    <input type="text" value={inputPassword} onChange={passwordHandler} />
                </div>
                <div>
                    <button onClick={infoHandler}>Đăng ký</button>
                </div>
                <div>
                {infos.map((info) => (
                    <div key={info.code}>
                        <p>{info.code}</p>
                        <p>{info.email}</p>
                        <p>{info.password}</p>
                    </div>
                    ))}
                </div>

        </>
    )

}

export default Form