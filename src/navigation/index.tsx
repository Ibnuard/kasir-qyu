import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import screen
import Home from '../screens/Home';
import Profile from '../screens/Profile';

import {RootStackParamList} from '../types';
import {Header} from '../components';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default RootStack;
