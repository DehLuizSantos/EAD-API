import React from 'react';

import Layout from './Components/Layout';

import UserContextProvider from './hooks/user'

import './Styles/global.scss'



const App:React.FC = () => {
  return (
    <UserContextProvider>
      <Layout />
    </UserContextProvider>
  );
}

export default App;
