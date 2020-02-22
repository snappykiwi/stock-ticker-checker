import React from 'react';
import { Icon } from 'react-materialize';
import './styles.css';

const TrendIcon = ({ stockTrend }) => {

  if (stockTrend > 0) {
    return (
      <Icon className="stockTrend green-text text-accent-3">trending_up</Icon>
    )
  }
  else if (stockTrend === 0) {
    return (
      <Icon className="stockTrend grey-text">trending_flat</Icon>
    )
  }
  else {
    return (
      <Icon className="stockTrend red-text text-accent-3">trending_down</Icon>
    )
  }

}

export default TrendIcon;