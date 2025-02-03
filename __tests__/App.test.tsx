import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store';
import { View } from 'react-native';

describe('App Component', () => {
  it('renders correctly', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{ flex: 1 }} testID="app-container">
            <App />
          </View>
        </PersistGate>
      </Provider>,
    );

    expect(getByTestId('app-container')).toBeTruthy();
  });
});
