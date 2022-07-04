import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import completion from "../helpers/completion";

function Summary () {

  const goods = useSelector(state=>state)
  const [count, setCount] = useState(0)

  useEffect(()=> {
    let sum = 0
    goods.forEach((el)=> {
      sum += Number(el.price)
    })
    setCount(sum)
  },[goods])

  return (
    <div className = 'summary'>
      <h3> <b> Итого : </b> </h3>
      <span> {completion(goods.length)} </span>
      <span> {`${count} $`} </span>
    </div>
  );
}

export default Summary;