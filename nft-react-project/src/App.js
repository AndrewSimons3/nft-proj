
import './App.css';
import Header from './components/Header';
import PunkList from './components/PunkList';
import Main from './components/Main';

import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
				'https://testnets-api.opensea.io/assets?asset_contract_address=0x8843B107F8FC81ae22e895a3dE3af5EA009fAafC&order_direction=asc'
			);
      
      setPunkListData(openseaData.data.assets);
    }
    return getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  )
}

export default App;
