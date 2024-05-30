import { useState } from "react";

function Form () {
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
            alert("Đăng ký thành công.")
        }
    }
    return (
        <>
            <form>
            <div className="container">
                    <div className="input-group">
                            <label htmlFor="code">Employee Code</label>
                            <input type="text" name="code" id="code" value={inputCode} onChange={codeHandler}  />
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={inputEmail} onChange={emailHandler} />
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" value={inputPassword} onChange={passwordHandler} />
                    </div>

                <div>
                    <button onClick={infoHandler}>Đăng ký</button>
                </div>
            </div>
            </form>
        </>
    )

}

export default Form