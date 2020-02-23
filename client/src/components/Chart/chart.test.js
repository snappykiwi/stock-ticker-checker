import React from 'react';
import { shallow } from 'enzyme';
import Chart from './index';

it('expects to render the Chart component', () => {
  const mockChartData = {
    symbol: "A",
    price: "12",
    pastStats: []
  }
  const mockChartData2 = {
    symbol: "A",
    price: "12",
    pastStats: [
      {
        price: 10,
        time: 1582318797546
      },
      {
        price: 11.24,
        time: 1582318797610
      }
    ]
  }
  expect(shallow(<Chart chartData={mockChartData} />)).toMatchSnapshot();
  expect(shallow(<Chart chartData={mockChartData2} />)).toMatchSnapshot();
});