import {legacy_createStore as create_store} from 'redux';
import reducer from "./reducer/reducer"



let store = create_store(reducer);
export default store