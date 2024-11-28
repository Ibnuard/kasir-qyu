import * as React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Profile = ({route, navigation}: Props) => {
  return (
    <View>
      <Text>Holaa Profile</Text>
    </View>
  );
};

export default Profile;
