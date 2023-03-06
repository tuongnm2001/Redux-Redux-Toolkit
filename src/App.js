// import './App.css';

import axios from 'axios'
import { useEffect } from 'react';
import Home from './components/Home';

function App(props) {

  const fetchAllUser = async () => {
    const res = await axios.get(`http://localhost:8080/users/all`)
    const data = res && res.data ? res.data : []
    console.log('check data : ', data);
  }

  useEffect(() => {
    fetchAllUser()
  }, [])

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
