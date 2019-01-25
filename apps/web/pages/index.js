// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Search } from '@kiwicom/margarita-core';
import { StyleSheet } from '@kiwicom/universal-components';
import { SearchContext } from '@kiwicom/margarita-context';

import Layout from '../components/Layout';

export default () => (
  <Layout>
    <View style={styles.page}>
      <SearchContext.Provider>
        <Search />
      </SearchContext.Provider>
    </View>
  </Layout>
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
