import React from "react";
import { storeData, getData } from "./local_storage";

const persistentData = getData();

const AuthContext = React.createContext(persistentData);

export default AuthContext;
