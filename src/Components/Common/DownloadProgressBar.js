import React ,{ useRef, useEffect, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { showDownloadProgressBar } from '../../action';
import jsPDF from 'jspdf';
import Pdf from '../Pdf/Pdf';


const DownloadProgressBar = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.reducer)
    const contentToPrint = useRef(null);

    const [total, setTotal] = useState(0);
    const [current, setCurrent] = useState(0);
    const [loading, setLoading] = useState(true);
    
    const download = () => {
        const doc = new jsPDF({
            format: 'a4',
            unit: 'px',
        });
    
        setLoading(true);
        // Get the width of the PDF page
        const pageWidth = doc.internal.pageSize.getWidth();

        // Set the width of the content elements to match the PDF page width
        const content = contentToPrint.current;
        const contentElements = content.querySelector('.order-pdf-wrapper');
        contentElements.style.width = pageWidth + 'px';
        doc.html(contentToPrint.current, {
            async callback(doc) {
                setLoading(false);
                doc.save(state.const_var.new_building_name);

                const blob = await doc.output('blob');
                const url = URL.createObjectURL(blob);
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.addEventListener('progress', (event) => {
                    setCurrent((event.loaded/1024).toFixed(1));
                    setTotal((event.total/1024).toFixed(1));
                    if(event.total === event.loaded) {
                        setTimeout(() => {
                            if(state.const_var.isShowDownloadProgressBar){
                                dispatch(showDownloadProgressBar("show"));
                            }
                        }, 3000);
                    }
                });
        
                xhr.addEventListener('load', () => {
                    if (xhr.status === 200) {
                        console.log('Download complete');
                        URL.revokeObjectURL(url);
                    }
                });
        
                xhr.send();
                state.const_var.pdfBlob = blob
            },
        });
    }

    useEffect(()=>{
        if(state.const_var.isShowDownloadProgressBar) { 
            download();
        }
    },[])
    
    return (
        <>
            <div style={{ height: '0px', overflow: 'hidden'}}><div ref={contentToPrint}><Pdf /></div></div>
            <div className='progress-bar-wrap'>
                {
                    loading ? (
                        <div>Creating Product-Summary.PDF <span className='spin'></span></div>
                    ):(
                        <>
                            <div className='progress-bar-container'>
                                <div className='name-state'>
                                    <div className='pdf-name'>
                                        <h2>Product-Summary.PDF</h2>
                                    </div>
                                    <div className='progress-state'>
                                        <div className='percent'>
                                            <span>{current/total*100}% Completed</span>
                                        </div>
                                        <div className='capacity'>
                                            <span>{current} MB/{total} MB</span>
                                        </div>
                                    </div>
                                </div>
                                <progress id="file" max="100" value={current/total*100} style={{width: "300px"}}>{current/total*100}%</progress>
                            </div>
                            <div className='progress-bar-close'><span className='close' onClick={(e) => dispatch(showDownloadProgressBar("show"))}>&times;</span></div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default DownloadProgressBar