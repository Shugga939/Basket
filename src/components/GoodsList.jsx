import Card from "./Card";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_ITEM } from "../store/goodsStore";

function GoodsList() {
  
  const dispath = useDispatch()
  const goods = useSelector(state=>state)

  const deleteItem = (id)=> {
    dispath(REMOVE_ITEM(id))
  }

  const renderItem = (item) => {
    return (
      <Card 
      name={item.name}
      id={item.id}
      price={item.price}
      key={item.id}
      deleteItem={deleteItem}
      newPrice={item.newPrice}
      />
    )
  }

  return (
    <>
    {goods?.length?
      <>
      <div className = 'card card--fist-row'>
        <span className="card__title"> <b> Наименование </b> </span>
        <span className="card__id"> <b> ID </b> </span>
        <span className="card__price"> <b> Цена, $ </b> </span>
        <button 
        > Удалить </button>
      </div>
      <List items={goods} renderItem={renderItem}/>
      </>
    :
      <h2 className="goods-list__empty">
        Список пуст
      </h2> 
    }
    </>
  );
}

export default GoodsList;