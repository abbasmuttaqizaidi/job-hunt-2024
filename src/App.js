import { useEffect } from 'react';
import './App.css'
import { Medicines } from './components/Medicines';
import { useState } from 'react';
import { MedicineContext, initialGlobalState } from './context';

function App() {

  const [globalStates, setGlobalStates] = useState({ ...initialGlobalState });

  const handleGlobalState = (key = '', value = '') => {
    const tempGlobalState = { ...JSON.parse(JSON.stringify(globalStates)) };
    tempGlobalState[key] = value;
    setGlobalStates(tempGlobalState)
  }

  useEffect(() => {

    getData(globalStates.search)
  }, [globalStates.search])

  const getData = (query) => {
    fetch(`https://backend.cappsule.co.in/api/v1/new_search?q=${query}&pharmacyIds=1,2,3`).then(res => res.json()).then(data => {
      console.log(data, "fdsfsafkjfsakfjshakjf");
    })
  }

  return (
    <MedicineContext.Provider value={{ globalStates, handleGlobalState }}>
      <Medicines />
    </MedicineContext.Provider>
  );
}

export default App;
