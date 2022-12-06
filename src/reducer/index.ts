import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export interface DataProps {
    advice: []
    name:string
    amount:string
    duration:string
    email:string
    goal:string
    riskScore:number
}
export interface UserTypeInterface {
    data: any
}

const initialState: UserTypeInterface = {
    data: {},
}


export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      return {...state, data:action.payload}
    },
  },

})

// Action creators are generated for each case reducer function
export const {setUser } = UserSlice.actions

export default UserSlice.reducer