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
      <div className='form'>
        <div>
          <pre>
          <label className='label' htmlFor="name">Enter Employee Code</label> <br></br>
          <input type="text" id="name" name="name" onChange={onChangeHandler} value={inputValue} />
          </pre>
        </div>
        <div>
        <button className="confirm" type="submit" onClick={handleCode}>Submit</button>
        </div>
      </div>
      <div>List Employee Code</div>
      <div>
          {
            codes.map(item => <div key={item}>{item}</div>)
          }
      </div>
      
    </>
  )
}

export default App
