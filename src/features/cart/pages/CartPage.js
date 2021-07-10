import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import * as CartDuck from "../../../features/cart/ducks/cart.duck";
import {useDispatch} from "react-redux";
import { useQuery } from 'react-query';
import { getList } from "../../catalog/api/CatalogAPI";
//import "./my_css.css";
import "../../../my_css.css";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { useForm, Controller } from "react-hook-form";




export function CartPage() {
  const [totalAmount,setTotalAmount] = useState(0);
  const [catalog,setCatalog] = useState([]);

  const selectItems = useSelector(CartDuck.selectItems);

  let products_id = [];
  let qty = [];
  selectItems.forEach(function(el){
      products_id.push(el.id);
      qty.push(el.qty);
  });
  const [inputs,setInputs] = useState(qty);

  const { data,error,isLoading } = useQuery("products", async () => {
    let { data } = await getList();
    setCatalog(data);
  });
  let selectedProducts = catalog.filter(product => products_id.includes(product.id));

  const numProducts = useSelector(CartDuck.selectNumProducts);
  const total = useSelector(CartDuck.selectTotal);


  // получим ссылку на метод dispatch объекта store
  const dispatch = useDispatch();
  const removeProduct = (value) => dispatch(CartDuck.removeItem(value)); // сгенерируем функции для действий
  const updateProduct = (id,qty) => dispatch(CartDuck.updateItem(id,qty));

  const handleChangeInput = (event) => {
    let { target } = event;
    let name = target.name;
    let val = target.value;
    val = val.replace(/[^\d;]/g, ''); //val.replace(/\D/gmi, ''); //parseInt(target.value);  /[^\d;]/g, '')
    console.log('name_val',name,val);
    let index = products_id.indexOf(name);
    let current = inputs;
    current[index] = val;
    setInputs(current);

    updateProduct(name,val);

  }

  return (
    <div className="page">
      {
        isLoading ? (<div>Загрузка...</div>) :
        (
         <div>
           
            <div className="title">Содержимое корзины</div>
            <form>
              {/* const { register, errors, handleSubmit } = useForm(); */}
              <div className="item w-50 bw">Фото</div>
              <div className="item w-300 bw">Название</div>
              <div className="item w-100 bw">Цена</div>
              <div className="item w-100 bw">Количество</div>
              <div className="item w-100 bw">Стоимость</div>
              <div style={{clear: 'both'}}></div>
              {
                selectedProducts.map((product, i) => (
                    <div key={i}>

                      <div className="item w-50"><img width="50px" height="50px" src={product.photo}/></div>
                      <div className="item w-300">{product.title}</div>
                      <div className="item w-100">{product.price}</div>
                      <div className="item w-100"><input style={{width: '95%'}} onChange={handleChangeInput} type="number"
                                                         name={product.id}  defaultValue={inputs[i]}/></div>
                      <div className="item w-100" id={i}>{product.price * selectItems[i].qty}</div>
                      <Button onClick={() => removeProduct(product.id)} exact component={Link} variant="contained"
                              color="secondary">
                        Удалить из корзины
                      </Button>
                      <div style={{clear: 'both'}}></div>

                      {/* defaultValue={selectItems[i].qty}*/}
                      {/* https://habr.com/ru/post/540462/ */}
                    </div>
                ))
              }
              <div className="item w-50"></div>
              <div className="item w-300 bw">ИТОГО</div>
              <div className="item w-100"></div>
              <div className="item w-100 bw">{numProducts}</div>
              <div className="item w-100 bw">{total}</div>
              <div style={{clear: 'both'}}></div>

              <Button to="/order" exact component={Link} variant="contained" color="primary">
                Oформить заказ
              </Button>
            </form>
         </div>
        )
      }
        </div>

  );
}

CartPage.propTypes = {};
