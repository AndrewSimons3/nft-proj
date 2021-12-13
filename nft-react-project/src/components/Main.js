import React from 'react';
import './Main.css';
import instagramLogo from '../assets/instagram.png';
import twitterLogo from '../assets/twitter.png';
import moreIcon from '../assets/more.png';
import { useState, useEffect } from 'react';

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0])

	useEffect(() => {
		setActivePunk(punkListData[selectedPunk])
  }, [punkListData, selectedPunk])
  
  

	return (
		<div className='main'>
			<div className='mainContent'>
				<div className='punkHighlight'>
					<div className='punkContainer'>
						<img
							className='selectedPunk'
							src={activePunk.image_original_url}
							alt='selected punk'
						/>
					</div>
				</div>

				<div className='punkDetails' style={{ color: '#fff' }}>
					<div className='title'>
						{activePunk.name}
						<span className='itemNumber'>#{activePunk.token_id}</span>
					</div>

					<div className='owner'>
						<div className='ownerImageContainer'>
							<img src={activePunk.owner.profile_img_url} alt='user profile' />
						</div>
						<div className='ownerDetails'>
							<div className='ownerNameAndHandle'>
								<div>{activePunk.owner.address}</div>
								<div className='ownerHandle'>@simdrew07</div>
							</div>
							<div className='ownerLink'>
								<img src={instagramLogo} alt='instagram' />
							</div>
							<div className='ownerLink'>
								<img src={twitterLogo} alt='twitter' />
							</div>
							<div className='ownerLink'>
								<img src={moreIcon} alt='owner' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
