import {useState, useEffect} from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import TransactionAction from './component/TransactionAction';
import TransactionContent from './component/TransactionContent';
import Footer from './component/Footer';

function App() {
  return (
    <div className="container mw-md">
      <TransactionAction/>
      <TransactionContent/>
      <Footer/>
    </div>
  );
}

export default App;
