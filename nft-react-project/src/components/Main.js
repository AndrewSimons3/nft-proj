import React from 'react';
import './Main.css'

const Main = ({ selectedPunk, punkListData }) => {
  const [activepunk, setActivePunk] = useState(punkListData[0])

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk])
  }, [punkListData, selectedPunk])
  return (
    <d className='main'>
      <div className='mainContent'>
        <div className='punkHighlight'>
          <div className='punkContainer'>
            <img className='selectedPunk'
              src={activePunk.image_original_url}
              alt=''
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: '#fff' }}
          <div className='title'>
          {activePunk.name}
        </div>
        <span className='itemNumber'>*{activePunk.token_id}</span>
      </div>
      <div className='owner'>
        <div className='ownerImageContainer'>
          <img src={activePunk.owner.profile_img)url} alt=''/>
        </div>
        <div classNmae="ownerDetails">
          <div className="ownerNameAndHandle">
            <div>{active.Punk.}</div>
            <div className="ownerHandle">@bigsim</div>
          </div>
          <div className="ownerLink">
            <img src={''}
          </div>
          <div className="owner">
            <img src={''}
          </div>
          <div className="ownerLink">
            <img src={''}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
