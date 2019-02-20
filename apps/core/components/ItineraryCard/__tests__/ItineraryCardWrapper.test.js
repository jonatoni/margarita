// @flow

import * as React from 'react';
import { View } from 'react-native';
import { render } from 'react-native-testing-library';
import { LocalizedPrice, Text } from '@kiwicom/universal-components';
import { formatPrice } from '@kiwicom/margarita-utils';

import BadgesContainer from '../BadgesContainer';
import ItineraryCardWrapper from '../ItineraryCardWrapper';

describe('ItineraryCardWrapper', () => {
  const price = {
    amount: 123455.35,
    currency: 'EUR',
  };
  const { getAllByType, getByType } = render(
    <ItineraryCardWrapper localizedPrice={formatPrice(price)}>
      <View />
      <View />
    </ItineraryCardWrapper>,
  );

  it('should contain correct number of badges container', () => {
    expect(getAllByType(BadgesContainer)).toHaveLength(1);
  });

  it('should set proper price format', () => {
    expect(getByType(LocalizedPrice).findByType(Text).props.children).toBe(
      '€123,455.35',
    );
  });
});
