import { combineReducers } from "redux";
import auth from "./auth";
import map from "./Map/map";
import message from "./message";
import company from "./Profiles/company";
import companyAdmin from "./Profiles/companyAdmin";
import companyWorker from "./Profiles/companyWorker";
import event from "./Profiles/event";
import user from "./Profiles/user";

export default combineReducers({
    auth,
    message,
    company,
    companyAdmin,
    companyWorker,
    user,
    event,
    map,
});