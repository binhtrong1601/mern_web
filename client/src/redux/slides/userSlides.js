import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone:"",
  address:"",
  avatar:"",
  access_token: "",
};

export const userSlides = createSlice({
  name: "user",
  initialState,
  reducers: {
      updateUser: (state, action) =>{
        const {name ='', email='',access_token='',phone='',address='',avatar='',_id=''} = action.payload;
        state.name = name;
        state.email = email;
        state.phone = phone;
        state.address = address;
        state.avatar = avatar;
        state.id = _id
        state.access_token = access_token;
      },
      resetUser: (state) =>{
        state.name = '';
        state.email = '';
        state.phone = '';
        state.address = '';
        state.avatar = '';
        state.id = '';
        state.access_token = '';
      },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser,resetUser } = userSlides.actions;

export default userSlides.reducer;
