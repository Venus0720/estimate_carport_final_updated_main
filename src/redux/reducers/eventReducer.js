import { params, const_var} from './reducer';
import * as cuComponent from './componentReducer';
export const eventState= {
    mouseEvent:"",
}
const eventReducer = (state = eventState, action) => {
        const newState = { ...state };
        switch (action.type) {
        case "ONMOUSEUPEVENT":
            //cuComponent.onDocumentMouseUp();
            return{
                ...state,
                mouseEvent:action
            }
            break;
        case "onMouseDownvent":
            cuComponent.onResize();
            //cuComponent.onDocumentMouseDown(action.event);
            return{
                ...state,
                mouseEvent:action
            }
            break;
        case "onMouseMoveEvent":
            //cuComponent.onDocumentMouseMove(action.event);
            // console.log(action.event,"action.move")
            return{
                ...state,
                mouseEvent:action
            }
            break;

        case "onMouseWheelEvent":
            //cuComponent.onDocumentMouseWheel(action.event);
            return{
                ...state,
                mouseEvent:action
            }
            break;
        
      }
    return newState;
  };
  export default eventReducer;