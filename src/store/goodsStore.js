import { createStore } from "redux"

const goodsReducer = (state = [{name:'Lamp', id: '231231', price: '2314', newPrice: null}], action) => {
  switch (action.type) {
    case 'ADD_ITEM' : {
      return [...state, action.payload]
    }
    case 'REMOVE_ITEM' : {
      return state.filter((item)=> item.id !== action.payload)
    }
    case 'CALCULATE_DISCOUNT' : {
      return state.map((item)=> ({...item, newPrice: item.price-(item.price*action.payload/100)}))
    }
    default : return state
  }
}

export const goodsStore = createStore (goodsReducer)
export const ADD_ITEM = (payload)=> ({type:'ADD_ITEM', payload})
export const REMOVE_ITEM = (payload)=> ({type:'REMOVE_ITEM', payload})
export const CALCULATE_DISCOUNT = (payload)=> ({type:'CALCULATE_DISCOUNT', payload})

