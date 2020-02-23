import React from 'react';
import { shallow } from 'enzyme';
import TrendIcon from './index';

it('expect to render TrendIcon component', () => {
  const mockNegStockTrend = -1;
  const mockPosStockTrend = .23;
  const mockNeutStockTrend = 0;

  expect(shallow(<TrendIcon stockTrend={mockNegStockTrend} />)).toMatchSnapshot();
  expect(shallow(<TrendIcon stockTrend={mockPosStockTrend} />)).toMatchSnapshot();
  expect(shallow(<TrendIcon stockTrend={mockNeutStockTrend} />)).toMatchSnapshot();
})