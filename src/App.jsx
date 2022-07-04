import Discount from "./components/Discount";
import Form from "./components/Form";
import GoodsList from "./components/GoodsList";
import Summary from "./components/Summary";


function App() {


  return (
    <main className="app">
      <div className="app__wrapper">
        <div className="app__form">
          <h1 className="app__form-title"> Добавление товара в корзину </h1>
          <Form/>
        </div>
        <div className="app__goods-list">
          <div className="goods-list">
            <h1 className="goods-list__title"> Список товаров </h1>
          </div>
            <GoodsList/>
        </div>
        <div className="app__summary">
          <Summary/>
        </div>
        <div className="app__discount">
          <Discount/>
        </div>
      </div>
    </main> 
  );
}

export default App;
