import React from 'react'

const ExitIntend = () => {
  return (
    <div className='exit-container overlay-container'>
        <div className='main-exit'>
            <div className='exit-icon'>&times;</div>
            <div className='title'>WAIT A SEC!</div>
            <div className='warningcomment'>
                <div>Exiting now will discard any unsave changes to your</div>
                <div>building. Are you sure you want to leave?</div>
            </div>
            <div className='button-bettwen'>
                <button className='btn-can'>Cancel</button>
                <button className='btn-ok'>Leave</button>
            </div>
        </div>
    </div>
  )
}

export default ExitIntend;