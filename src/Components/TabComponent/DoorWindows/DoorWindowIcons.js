import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../../../action/index';
import editIcon from '../../../assets/images/edit_icon.svg';

function DoorWindowIcons(props) {
    return (
        props.state.doorWindowIconsPos.map((item, index) => {
            let itemLeftPos = item.left.split('px')[0];
            let itemTopPos = item.top.split('px')[0];

            return <div key={index} uniqueId={item.uniqueId} onClick={(event) => props.handleIconClick(event,'door')}>
                <img src={process.env.REACT_APP_BASE_URL+editIcon} style={{position: 'absolute', width: '28px', height: '28px', top: itemTopPos < 0 ? '0px' : item.top, left: itemLeftPos > 600 ? '600px' : item.left , display:item.display}}/>
            </div>
        })
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.reducer
    }
}


export default connect(mapStateToProps, actionCreator)(DoorWindowIcons);