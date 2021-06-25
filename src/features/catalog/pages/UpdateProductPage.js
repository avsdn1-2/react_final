import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from "react-router";

import { Example } from "../components/Example";

export function UpdateProductPage() {
  const { id } = useParams();
  return (
    <div className="page">
      Update Product page

    </div>
  );
}

UpdateProductPage.propTypes = {};
