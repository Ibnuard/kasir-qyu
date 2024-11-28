import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {THEME_COLORS} from '../../constants';

const Header = () => (
  <Appbar.Header style={styles.headerContainer}>
    <Appbar.Content color={THEME_COLORS.onPrimary} title="Title" />
  </Appbar.Header>
);

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: THEME_COLORS.primary,
  },
});

export default Header;
