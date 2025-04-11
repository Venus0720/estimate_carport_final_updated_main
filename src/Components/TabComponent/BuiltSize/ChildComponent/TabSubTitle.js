import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

const TabSubTitle = () => {
    const [viewDetail, setViewDetail] = useState(false);
    const [textCount, setTextCount] = useState(0);
    const activemaintabkey = useSelector((state) => state.reducer.activemaintabkey);

    const textDeskTopRef = useRef(null);

    const handleResize = () => {
        if (textDeskTopRef.current) {
            const averageCharacterWidth = 7;
            setTextCount(Math.floor(textDeskTopRef.current.clientWidth / averageCharacterWidth) * 2);
        }
    };

    useEffect(() => {
        handleResize();
    }, [activemaintabkey]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const tabName = {
        builtSize: 'Choose width, length, and height to start. Default options reflect the building provider’s recommendations. Customize your build further with roof style, pitch, and gauge on this tab. ',
        leantos: 'Add lean-to units on sides/ends of the structure from here. Any lean-to can be customized to fit your application.  Important Note – Some of the options such as Snow & Wind rating, Insulation (if applicable), etc. will reflect the same selection in Lean-tos as selected in center building. (i.e. If you select Insulation>Full Building, Lean-To(s) could be included.) Wrap Arounds are available if your provider offers them in your area. While wraparounds can cover all the corners of the building, the connecting lean-tos are required to be of same height and width.',
        doorWindows: 'To add a door, window, or frame out, click the "+Add" button. Click the “Pencil Icon" placed on the top right of the component. It will open an EDIT box for further options and customization of the component Drag & Set the components according to your requirements on desktop, and double-tap to position them on mobile devices.',
        options: 'All additional features for the building’s frame and materials are shown here. Both visual and non-visual elements, including insulation, anchors, installation surfaces, overhang, coloured screws, and many more, as offered by the provider, will be available.',
    };

    return (
        <div className='tab-sub-title-container'>
            <div ref={textDeskTopRef} className='tab-sub-title'>
                <span>{viewDetail ? tabName[activemaintabkey] : tabName[activemaintabkey].slice(0, textCount)}{ (tabName[activemaintabkey].length > textCount && !viewDetail ) && '...'}</span>
                {viewDetail ? (
                    <span className='read-more' onClick={() => setViewDetail(false)}> less</span>
                ) : (
                    tabName[activemaintabkey].length > textCount && (
                        <span className='read-more' onClick={() => setViewDetail(true)}>read more</span>
                    )
                )}
            </div>
        </div>
    );
};

export default TabSubTitle;