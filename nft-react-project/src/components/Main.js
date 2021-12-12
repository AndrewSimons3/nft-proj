import React from 'react';
import './Main.css';
import instagramLogo from '../assets/instagram.png';
import twitterLogo from '../assets/twitter.png';
import moreIcon from '../assets/more.png';
import { useState, useEffect } from 'react';

const Main = ({ selectedPunk, punkListData }) => {
  const [activepunk, setActivePunk] = useState(punkListData[0])

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk])
  }, [punkListData, selectedPunk])
  return (
    <div className='main'>
      <div className='mainContent'>
        
        <div className='punkHighlight'>
          <div className='punkContainer'>
            <img className='selectedPunk'
              src=''
              alt=''
            />
          </div>
        </div>

        <div className='punkDetails' style={{ color: '#fff' }}>
          <div className='title'></div>
          <span className='itemNumber'></span>
        </div>
      
      <div className='owner'>
        <div className='ownerImageContainer'>
          <img src='' alt=''/>
        </div>
        <div className='ownerDetails'>
          <div className='ownerNameAndHandle'>
            <div>{}</div>
            <div className='ownerHandle'>@bigsim</div>
          </div>
          <div className='ownerLink'>
            <img src={instagramLogo} />
          </div>
          <div className="owner">
            <img src={twitterLogo} />
          </div>
          <div className="ownerLink">
            <img src={moreIcon} />
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Main;
