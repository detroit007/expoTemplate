import { createSlice, nanoid, combineReducers, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Alert } from "react-native";
import User from "../../data/User";
import Urls, { BASEURL } from "../../server/Urls";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const loginUser = createAsyncThunk(
  "user/loginStatus",
  async({email,password}, thunkAPI)=>{
      const formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);
    const response = await axios.post(`${BASEURL}${Urls.LOGIN}`, formdata)
    thunkAPI.dispatch(login(response.data));
    return response.data;
  }
)

const AuthSlice = createSlice({
  name: 'auth',
  initialState: { User: { name: 'ham', id: nanoid(), login: false} },
  reducers: {
    login: (state, action) => {
      const {id, name,} = action.payload; 

      if(action.payload.status === "1"){
        const user = new User(id, name, true)
        const userData = JSON.stringify(user)
        AsyncStorage.setItem('user_data', userData);
        return user  // mutate the state all you want with immer
        
      }
    }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [loginUser.rejected] : () =>{
      Alert.alert( 
        "Alert!",
        "something went wrong",
        [{text: 'Ok', style: 'default'}]
      );
    }
  }
})

export const { login } = AuthSlice.actions;

export default AuthSlice.reducer;