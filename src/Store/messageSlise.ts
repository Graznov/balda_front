import {createSlice} from '@reduxjs/toolkit'

interface message {
    messageStatus: boolean,
    messageHead:string|null,
    messageText:string|null,
    messageType:'info'|'error'
}

const initialState:message = {
    messageStatus:false,
    messageHead:null,
    messageText:null,
    messageType:"info",
}

const messageSlice = createSlice({
    name: 'messageSlice',
    initialState,
    reducers:{
        setResetMessage(state){
            state.messageStatus = false
            state.messageHead = null
            state.messageText = null
            state.messageType = 'info'
        },

        setDataMessage(state, action){
            state.messageStatus = action.payload.messageStatus
            state.messageHead = action.payload.messageHead
            state.messageText = action.payload.messageText
            state.messageType = action.payload.messageType
        },



    },

})

export const {
    setDataMessage,
    setResetMessage

} = messageSlice.actions;
export default messageSlice.reducer