
import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Main from './components/Main';
import PunkList from './components/PunkList';
import weth from './assets/weth.png';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets=api.opensea.io/assets?asset_contract_address='
      )

      console.log(openseaData.data.assets)
      setPunkListData(openseaData);
    }
    

    return getMyNfts()
  }, [])

  return (
  <div className='app'>
      <Header />
      <>
        <Main punkListData={punkListData} />
        punkListData.length > 0 && (
        <PunkList punklist={punkListData} setSelectedPunk={selectedPunk}
          />
      <>
        )
    
    </div>
  )
}

export default App;
