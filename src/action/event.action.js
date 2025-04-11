
import { batch } from 'react-redux';

export function onMouseUpEvent(e)
{
    return(dispatch)=>{
        dispatch({
            type:"ONMOUSEUPEVENT",
            event: e
        })

        // dispatch({
        //     type: "UPDATE_DOOR_WINDOW_EDIT_ICONS",
        // });
    }
}
export function onMouseDownEvent(e)
{
    return(dispatch)=>{
        batch (() => {        
            dispatch({
                type:"onMouseDownvent",
                event: e
            });

            dispatch({
                type: "UPDATE_DOOR_WINDOW_EDIT_ICONS",
                event: e
            });
        })
    }
}

export function onMouseClickEvent(e)
{
    return(dispatch)=>{
        dispatch({
            type: "UPDATE_DOOR_WINDOW_EDIT_ICONS",
            event: e
        });
    }
}

export function onMouseScrollEvent(e) {
    return (dispatch) => {
        dispatch({
            type: "DISABLE_DOOR_WINDOW_EDIT_ICONS"
        })
    }
}

// export function onWheelEvent(e) {
//     return (dispatch) => {
//         dispatch({
//             type: "onMouseWheelEvent",
//             event: e
//         });

//         dispatch({
//             type: "UPDATE_DOOR_WINDOW_EDIT_ICONS",
//         });
//     }
// }

export function onMouseMoveEvent(e)
{
    return(dispatch)=>{
        dispatch({
            type:"onMouseMoveEvent",
            event: e
        })
    }
}