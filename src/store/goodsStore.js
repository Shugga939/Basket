import { legacy_createStore as createStore} from 'redux'
import calculateDiscount from '../helpers/calculateDiscount'


const goodsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM' : {
      return [...state, action.payload]
    }
    case 'REMOVE_ITEM' : {
      return state.filter((item)=> item.id !== action.payload)
    }
    case 'CALCULATE_DISCOUNT' : {
      return state.map((item)=> ({...item, newPrice: calculateDiscount(item.price, action.payload)}))
    }
    case 'ZEROING_DISCOUNT': {
      return state.map((item)=> ({...item, newPrice: null}))
    }
    default : return state
  }
}

export const goodsStore = createStore (goodsReducer)
export const ADD_ITEM = (payload)=> ({type:'ADD_ITEM', payload})
export const REMOVE_ITEM = (payload)=> ({type:'REMOVE_ITEM', payload})
export const CALCULATE_DISCOUNT = (payload)=> ({type:'CALCULATE_DISCOUNT', payload})
export const ZEROING_DISCOUNT = (payload)=> ({type:'ZEROING_DISCOUNT', payload})


