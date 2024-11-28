import React from 'react';
import Main from './src';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  configureFonts,
} from 'react-native-paper';
import {CUSTOM_FONT, THEME_COLORS} from './src/constants';

const theme = {
  ...DefaultTheme,
  colors: THEME_COLORS,
  fonts: configureFonts({config: CUSTOM_FONT}),
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Main />
    </PaperProvider>
  );
};

export default App;
