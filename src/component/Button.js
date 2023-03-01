import React, { useState } from 'react'
import serverConfig from 'server/serverConfig.json'

export function Child() {
    console.log('Child');
    return <div>Child</div>;
  }
function returnChild(){
    return <Child></Child>;
}
export default function Button(props){
    const [num,setNum] = useState(0);
    // return <button onClick = {()=>{
    //     let n = num + 1;
    //     setNum(n);
    //     let xhr = new XMLHttpRequest();
    //     xhr.open('get',`http://${serverConfig.host}:3001/index.js`);
    //     xhr.setRequestHeader('Origin',`http://${serverConfig.host}:3000`)
    //     // xhr.setRequestHeader('withCredentials','true')
    //     xhr.send(null)
    // }}>Button: {num}</button>
    return <div onClick={() => {
      setNum(1)
      setNum((num)=> num+1)
      setNum((num)=> num+2)
      }}>
    {num+1}
    {props.children}
        {/* {returnChild()} */}

        
  </div>
}