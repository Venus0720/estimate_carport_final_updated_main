import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { talkexpert, showDownloadProgressBar, connectshare, genratePrintImages, showSaveLater } from '../../action';
import BookmarkIcon from '../../assets/images/call/bookmark.svg';
import PdfIcon from '../../assets/images/call/pdf.svg';
import ForwardIcon from '../../assets/images/call/forwardicon.svg';
import { handleSaveLatter } from '../../action/quote.action';

const BuildingAction = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.reducer)

    const downloadPdf = () => {
        if(!state.const_var.isShowDownloadProgressBar) {
            dispatch(showDownloadProgressBar("show"))
        }
    }
    

  return (
    <div>
        <div className="building-canvas-action-container">
            <div className='icon-tooltip'>
                <span className='tooltip-text'>Save Design</span>
                <img src={BookmarkIcon} alt="bookmark" onClick={(e)=>{dispatch(handleSaveLatter("open","lead")); dispatch(talkexpert("3"))}}></img>
            </div>

            <div onClick={(e)=>{dispatch(showSaveLater("pdf",true));dispatch(genratePrintImages(true))}} className='icon-tooltip'>
            <span className='tooltip-text'>Download PDF</span>
                <img src={PdfIcon} alt="pdf"></img>
            </div>
            <div className='icon-tooltip'>
                <img src={ForwardIcon} alt="forward" onClick={(e)=> dispatch(connectshare("show"))}></img>
            </div>
        </div>
    </div>
  )
}

export default BuildingAction;