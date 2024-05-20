'use client'
import { Provider } from 'react-redux';
import Store from '../store/index';

const ReduxProvider = ({children}) => {
  return (
    <Provider store={Store}>
        {children}
    </Provider>
  )
}

export default ReduxProvider;