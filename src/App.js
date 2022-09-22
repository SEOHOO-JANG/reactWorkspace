import {useState} from 'react';
import './App.css'
import Sub from './Sub';
 
function App() {
  //let number =1;  // 상태 값
  //const [number,setNumber]= useState(1); // React안에 hooks 라이브러리 상태값이 됨. 
  
  console.log("App 실행됨")

  const[num,setNumber]=useState(5);

  let sample = [
    {id:1, name:"홍길동"},
    {id:2, name:"임꺽정"},
    {id:3, name:"장보고"},
    {id:4, name:"이순신"},
  ];

  const [users, setUsers] = useState(sample); // 레버런스 변경도야 동작!!

  // const add = () => {
  //   setNumber(number+1); // 리엑트한테 number 값 변경할께 라고 요청 
  //   console.log("add",number);
  // }
  
  const download = () => {
    
    //const a = sample.concat({id:5, name:"조자룡"});
    setUsers([...sample,{id:num, name:"조자룡"}]);
    setNumber(num+1)
  }

  //랜더링 시점 = 상태값 변경
  return(
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u)=> (
      <h1>
        {u.id},{u.name}
      </h1>))}
    </div>
    // <div>
    //   <h1>숫자:{number}</h1>
    //   <button onClick={add}>더하기</button>
    //   <Sub/>
    // </div>
  )
}

export default App;

 