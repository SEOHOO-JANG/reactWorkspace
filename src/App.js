import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/home";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/input2";
import List from "./pages/List";

//0.React엔진 - 데이터변경감지에서 UI그려주는 엔진이다  
//1.실행과정(index.html) - SPA
//2.JSX 문법 

//(1) return시에 하나의 Dom만 리턴할 수 있다.
//(2) 변수선언은 let 혹운 const로만 해야함.
//(3) if사용 불가능 -> 삼항연산자 사용 가능 ( 조건 ? 값(true): 값(false))
//(4) 조건부 렌더링(조건 && 값(true))
//(5) css디자인
//   - 내부에 적는 방법 
//   - 외부 파일에 적는 방법
//   - 라이브러리 사용(부트스트랩,componet-styled)

let a= 10; // 변수 
const b = 20; // 상수

function App() {
  let c;
  //let d = undefined;
  console.log(1,c);

  const mystyle = { 
    color: "red", 
  };


  return (
    <div className="App" style={mystyle}>
      <nav className="box-style">
        <Link to="/">Home{a === 10? "10입니다. " : "10이 아닙니다." }</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/counter">Counter{b === 20 && '20입니다.'}</Link> |{" "}
        <Link to="/input">Input</Link> |{" "}
        <Link to="/input2">Input2</Link> |{" "}
        <Link to="/list">List</Link> |{" "}
        {/* = <a href="/">Home</a> */}
       
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/counter" element={<Counter / >}/>
        <Route path="/input" element={<Input / >} />
        <Route path="/input2" element={<Input2 / >} />
        <Route path="/list" element={<List / >} />
      </Routes>
    </div>
  );
  ;
}

export default App;
