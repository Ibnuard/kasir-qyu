import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './navigation';

const Main = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Main;
