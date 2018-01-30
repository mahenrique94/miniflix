import { combineReducers } from "redux";
import { error, loading, success} from "./media";

export default combineReducers({
    error,
    loading,
    success
});