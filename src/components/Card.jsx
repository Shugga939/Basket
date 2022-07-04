function Card ({id, name, price, deleteItem, newPrice}) {

  return (
    <div className = 'card'>
      <span className="card__title"> {name} </span>
      <span className="card__id"> {id} </span>
      <span className="card__price">
        {newPrice?  
          <span> <s> {price} </s> {newPrice} </span>
        :
          <span>  {price} </span>
        }
      </span>
      <button 
        className="btn"
        onClick={()=> deleteItem(id)}
      > Удалить </button>
    </div>
  );
}

export default Card;