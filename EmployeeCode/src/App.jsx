import { useState } from 'react'
import './App.css'

function App() {
  const [codes, setCode] = useState(['5HI1U8Q421',
    'FTYDFAT8KQ',
    'YUYBME74B4',
    'R7STV6CI3D',
    'ECLZALJY8V',
    'RZCDR788B0',
    '7HRTYUL5AY',
    '172GHRWJKH',
    'C57PXTWU6J',
    'ON1EVJNUSI'])

  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = event => {
    setInputValue(event.target.value);
  };

  function handleCode() {
    if (!inputValue) {
      alert("Mã nhân viên không được để trống")
    } else if (codes.includes(inputValue)) {
      alert("Mã nhân viên đã tồn tại trong hệ thống")
    } else {
      setCode([...codes, inputValue])
      alert("Thêm mã nhân viên thành công")
    }
  }

  return (
    <>
          <div className="container">
            <div className="input-group">
              <label htmlFor="employeeCode">Enter Employee Code</label>
              <input type="text" id="employeeCode" value={inputValue} name="employeeCode" onChange={onChangeHandler}/>
            </div>
            <button type="submit" onClick={handleCode}>Submit</button>
          </div>
      <div className="list-employee-code">
      <h3>List Employee Code</h3>
          {
            codes.map(item => <div key={item}>{item}</div>)
          }
      </div>
      
    </>
  )
}

export default App
