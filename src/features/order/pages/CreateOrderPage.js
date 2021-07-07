import React from 'react';
import PropTypes from 'prop-types';

import { OrderForm } from "../components/OrderForm";

export function CreateOrderPage() {
  return (
    <div className="page">
      Create Order page
        <OrderForm/>

    </div>
  );
}

CreateOrderPage.propTypes = {};
