import React from 'react';
import PropTypes from 'prop-types';

import { OrderForm } from "../components/OrderForm";
//import { useCreateOrder } from "../hooks/useCreateOrder";
import { useSaveOrder } from "../hooks/useSaveOrder";
import { useHistory } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import * as CartDuck from "../../cart/ducks/cart.duck";

export function CreateOrderPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    /*
    const createMutation = useCreateOrder(() => {
     //   history.push("/");
    });
     */

    const onSubmit = (values) => {
        console.log(values);
        //dispatch(CartDuck.saveOrder({firstName:values.firstName,lastName:values.lastName}));
    }
    const createOrder = useSaveOrder((e) => {
        e.preventDefault();
       // history.push("/posts");
    });
    /*
    const processForm = (values) => {
        console.log(values);
    }
    const handleS = (event) => {
        event.preventDefault();
        console.log(event.target.elements.firstName.value) // from elements property
        console.log(event.target.firstName.value)          // or directly
    }
     */
  return (
    <div className="page">
      Create Order page
        <OrderForm
            //onSubmit={createMutation.mutate}
            onSubmit={onSubmit}
        />

    </div>
  );
}

CreateOrderPage.propTypes = {};
