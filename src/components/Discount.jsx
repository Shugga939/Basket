import { useDispatch } from "react-redux"
import { CALCULATE_DISCOUNT, ZEROING_DISCOUNT } from "../store/goodsStore"

function Discount({setIsDiscount, discountRef}) {
  
  const dispath = useDispatch()

  let calculateDiscount = (e) => {
    e.preventDefault()
    if (discountRef.current.value >0 && discountRef.current.value<101) {
      dispath(CALCULATE_DISCOUNT(Number (discountRef.current.value)))
      setIsDiscount(true)
    }
  }

  let zeroingDiscount = (e) => {
    e.preventDefault()
    dispath(ZEROING_DISCOUNT())
    setIsDiscount(false)
  }

  return (
    <>
      <form className = 'discount'>
        <input 
          type="number" 
          className="discount__input"
          placeholder="Величина скидки в %"
          ref={discountRef}
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
          onClick={zeroingDiscount}
        > Убрать скидки
        </button>
      </form>
    </>
  );
}

export default Discount;