import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { axiosInstance } from "../../helpers/axiosInstance";

const initialState: InitialStateProps = {
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
    setUser(state, action: PayloadAction<SessionProps>) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
  },
});

export const fetchUserSession = () => {
  return async (dispatch: AppDispatch) => {
    const { data } = await axiosInstance.get("/api/session/me", {
      withCredentials: true,
    });
    dispatch(setUser(data));
  };
};
export const { setUser, removeUser } = sessionSlice.actions;

export const getUserSession = (state: RootState) => state.session.user;

export default sessionSlice.reducer;
