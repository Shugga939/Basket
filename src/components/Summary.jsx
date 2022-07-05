import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import completion from "../helpers/completion";

function Summary ({isDiscount}) {

  const goods = useSelector(state=>state)
  const [count, setCount] = useState(0)
  const [summary, setSummary] = useState(null)

  useEffect(()=> {
    let sum = 0
    goods.forEach((el)=> {
      sum += Number(el.price)
    })
    setCount(sum)
  },[goods])

  useEffect( ()=> {
    if (isDiscount) {
      let summary = 0
      goods.forEach((el)=> {
        summary += Number(el.newPrice)
      })
      setSummary(summary.toFixed(2))
    }
  }, [isDiscount,goods])

  return (
    <div className = 'summary'>
      <h3> <b> Итого : </b> </h3>
      <span> {completion(goods.length)} </span>
      {(isDiscount && goods.length)?  
          <span> <s> {count} </s> {summary}$ </span>
        :
          <span>  {count}$ </span>
        }
    </div>
  );
}

export default Summary;