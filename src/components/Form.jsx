import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM } from "../store/goodsStore";


function Form() {

  const dispath = useDispatch()
  const idRef = useRef(null)
  const nameRef = useRef(null)
  const priceRef = useRef(null)
  const defaultErrors = {name:false, id:false, price:false}
  const [error, setError] = useState(defaultErrors)
  const [idError, setIdError] = useState(false)
  const goods = useSelector(state=>state)

  function checkID () {
    let idBusy = false
    goods.forEach((el)=> {
      console.log(el.id ,idRef.current.value );
      if (el.id === idRef.current.value)  {
        idBusy = true
        return 
      }
    })
    return idBusy
  }

  function validation () {
    if (!idRef.current.value) {
      setError({...error, id: true})
      return false
    } else if (!nameRef.current.value) {
      setError({...error, name: true})
      return false
    } else if (!priceRef.current.value) {
      setError({...error, price: true})
      return false
    } else if (checkID()) {
      setIdError(true)
      return false
    } else {
      setError(defaultErrors)
      setIdError(false)
      return true
    }
  }
  
  const addItem = (e) => {
    e.preventDefault()

    if (validation()) {
      dispath(ADD_ITEM({
        id: idRef.current.value, 
        name: nameRef.current.value, 
        price: priceRef.current.value,
        newPrice: null
      }))
      idRef.current.value = ''
      nameRef.current.value = ''
      priceRef.current.value = ''
    } else {
      return
    }
  }

  return (
    <form className = 'form'>
      <div className="form__input-container">
        <input 
          type= 'text' 
          className = 'form__input'
          placeholder = 'Введите название товара'
          ref = {nameRef} 
          onChange={()=>setError({...error, name: false})}
        />
        {error.name? <p className="form__error"> Заполните поле </p> : ''}
      </div>

      <div className="form__input-container">
        <input 
          type= 'number' 
          className = 'form__input'
          placeholder = 'Введите номер товара'
          ref = {idRef}
          onChange={()=>setError({...error, id: false})}
        />
        {error.id? <p className="form__error"> Заполните поле </p> : ''}
        {idError? <p className="form__error"> ID товара занято </p> : ''}
      </div>

      <div className="form__input-container">
        <input 
          type= 'number' 
          className = 'form__input'
          placeholder = 'Введите цену товара'
          ref = {priceRef}
          onChange={()=>setError({...error, price: false})}
        />
        {error.price? <p className="form__error"> Заполните поле </p> : ''}
      </div>

      <button 
        type='submit'
        className = 'btn'
        onClick = {addItem}
      > Добавить </button>
    </form>
  );
}

export default Form;