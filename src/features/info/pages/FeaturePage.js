import React from 'react';
import PropTypes from 'prop-types';

import { Example } from "../components/Example";

export function FeaturePage() {
  return (
    <div className="page">
      Feature's home page
      <Example />
    </div>
  );
}

FeaturePage.propTypes = {};
