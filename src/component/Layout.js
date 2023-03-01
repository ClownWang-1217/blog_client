import React,{useState,useMemo,useCallback,useEffect} from 'react'
import ImageItem from './ImgeItem';
export default function Layout(props) {

    const[num,setNum] = useState(0)
    const[arr,setArr] = useState([])
    const onClick = ()=>{
        setNum(()=>{
            let n = num + 1;
            console.log('gaibian'+n)
            return n;
        })   
    }
    const itemClick = useCallback(()=>{
        console.log('i am item')
    },[])
  
    useEffect(()=>{ 
       num && setArr([{ key: num + 1 },...arr])
    },[num])
 
    // let array = []
    //     for (let index = 0; index < 1000; index++) {
    //         console.log(index);
    //         // array.push(<ImageItem index={index} onClick = {itemClick}/>)
    //         array
            
    //     }

    return <div className={'grid-container'}>
        <button onClick = {onClick}>{num}</button>
        {
            arr.map((v,index) => {
                console.log(arr.length)
                return <div key = {v.key}><ImageItem index={v.key} onClick={itemClick} /><input></input></div>
            })
        }
    </div>  
}