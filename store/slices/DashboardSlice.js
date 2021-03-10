import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Alert } from "react-native";
import Urls, { BASEURL } from "../../server/Urls";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const getDashboardData = createAsyncThunk(
  "user/dashboardStatus",
  async(user_id, thunkAPI)=>{
    const formdata = new FormData();
    formdata.append("user_id", 2);

    // const response = await axios({
    //   method: 'post',
    //   url: `${BASEURL}${Urls.DASHBOARD}`,
    //   data: formdata
    // });
    
    const response = await axios.post(`${BASEURL}${Urls.DASHBOARD}`, formdata )

    thunkAPI.dispatch(dashboardData(response.data));
    return response.data;
  }
)

const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {},
  reducers: {
    dashboardData: (state, action) => {
        return action.payload
    }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [getDashboardData.pending] : () =>{
        console.log("pending");
      },
    [getDashboardData.rejected] : () =>{
      Alert.alert( 
        "Alert!",
        "something went wrong",
        [{text: 'Ok', style: 'default'}]
      );
    }
  }
})


export const { dashboardData } = DashboardSlice.actions;

export default DashboardSlice.reducer;