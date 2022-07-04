import { useRef } from "react"
import { useDispatch } from "react-redux"
import { CALCULATE_DISCOUNT } from "../store/goodsStore"

function Discount() {
  
  const dispath = useDispatch()
  const unputRef = useRef('')

  let calculateDiscount = (e) => {
    e.preventDefault()
    dispath(CALCULATE_DISCOUNT(Number (unputRef.current.value)))
    
  }


  return (
    <>
      <form className = 'discount'>
        <input 
          type="number" 
          className="discount__input"
          placeholder="Величина скидки в %"
          ref={unputRef}
        />
        <button
          type="submit"
          className="btn"
          onClick={calculateDiscount}
        > Установить скидку
        </button>
        <button
          type="button"
          className="btn"
        > Убрать скидки
        </button>
      </form>
    </>
  );
}

export default Discount;