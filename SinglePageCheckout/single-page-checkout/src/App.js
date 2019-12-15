import React from 'react';
import Layout from './Components/Layout/Layout'
import BurgerBuilder from '../src/Container/BurgerBuild/BurgerBuild'
function App() {
  return (
    <div className="App">
      <Layout>
      </Layout>
      <BurgerBuilder/>
    </div>
  );
}

export default App;
