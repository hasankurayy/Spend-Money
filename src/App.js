import './App.css';
import { useState, useEffect } from "react"
import Header from "./components/Header"
import products from "./products.json"
import Product from "./components/Product"
import Basket from './components/Basket';

function App() {

  const [money, setMoney] = useState(150000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  const resetBasket = () => {
    setBasket([])
  }

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
      }, 0),
    )
    console.log(total);
  }, [basket])

  return (
    <>
      <Header money={money} total={total} />

      <div className="container products">
        {products.map(product => (
          <Product product={product} total={total} money={money} basket={basket} setBasket={setBasket} />
        ))}
      </div>

      {total > 0 && (
        <Basket basket={basket} products={products} total={total} resetBasket={resetBasket} />
      )}

    </>
  );
}

export default App;
