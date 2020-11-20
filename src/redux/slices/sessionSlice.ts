import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
};

type InitialStateProps = {
  user: SessionProps | null;
};

type SessionProps = {
  username: string;
  userAvatar: string;
  email: string;
  userRank: string;
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<InitialStateProps>) {
      //@ts-ignore
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
  },
});

export const fetchUserSession = () => {
  //@ts-ignore
  return async (dispatch) => {
    const { data } = await axios.get(
      "http://api.gruzja.localhost:3001/api/session/me",
      {
        withCredentials: true,
      }
    );
    dispatch(setUser(data));
  };
};
export const { setUser, removeUser } = sessionSlice.actions;
//@ts-ignore
export const getUserSession = (state) => state.session.user;

export default sessionSlice.reducer;
