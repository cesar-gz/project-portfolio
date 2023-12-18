import './index.scss'
import Timer from './timer'
import Playbar from './playbar'
import DJSchedule from './DJSchedule'
import RadioPlayer from './radio'
import cover from './music/cover.jpeg'

            <>
              <div className='player'>
                <div className='player_inner'>
                  <div id="scroll-container">
                    <h3 className="scroll-text" id="live">Now Playing: The Feed ( Episode 3 )</h3>
                  </div>
                  <div className='player_inner__middle'>
                    <div className='cube'>
                      <div className='cube_inner'>
                        <div id="DJshowLogo" className='cube_inner__front'>
                          <div className='bars'>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                          </div>
                          <div className='details'>
                            <div className='details_album'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='player_inner__bottom'>
                      <button className="button" id="DJ_button">
                        <h1 id="bio" style={{marginRight:'19px'}}>DJ artist</h1>
                      </button>
                      <div id="myModal" className="modal">
                        <div className="modal-content">
                          <span className="close">&times;</span>
                          <img className="DJimg" src={cover} alt="djPlayer"/>
                          <h1 id="DJname" style={{marginRight:'37px'}}>DJ Name</h1>
                          <p id="DJbio">DJ Bio</p>
                          <p id="DJshowBio">DJshowBio</p>
                          <DJSchedule />
                        </div>
                      </div>
                      <div className='playbar'>
                        <Playbar />
                        <div id='playbar_inner'></div>
                        <div className='playbar_left'>
                          <div id="songTimer"><Timer /></div>
                        </div>
                        <div className='playbar_right'>
                          <span>1:00:00</span>
                        </div>
                      </div>
                      <RadioPlayer />
                    </div>
                  </div>
                </div>
              </>
