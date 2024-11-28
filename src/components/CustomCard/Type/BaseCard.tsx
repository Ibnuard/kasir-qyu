import * as React from 'react';
import {StyleProp, StyleSheet, ViewProps, ViewStyle} from 'react-native';
import {Card} from 'react-native-paper';
import {THEME_COLORS} from '../../../constants';
import {Scaler} from '../../../utils';

type TBaseCard = {
  children: React.ReactNode | undefined;
  style?: ViewStyle;
};

const BaseCard = ({children, style}: TBaseCard) => {
  return <Card style={[styles.base, style]}>{children}</Card>;
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: THEME_COLORS.primary,
    padding: Scaler(14),
  },
});

export default BaseCard;
