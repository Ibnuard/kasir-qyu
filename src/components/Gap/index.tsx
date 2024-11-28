import * as React from 'react';
import {View} from 'react-native';
import {Scaler} from '../../utils';

type TGap = {
  h?: number;
  w?: number;
};

const Gap = ({w, h}: TGap) => {
  return <View style={{width: Scaler(w || 0), height: Scaler(h || 0)}} />;
};

export default Gap;
