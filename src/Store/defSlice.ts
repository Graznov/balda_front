import {createSlice} from '@reduxjs/toolkit'
//
// export interface Task {
//     id: string,
//     title: string,
//     description: string,
//     dueDate: string,
//     category: string,
//     color: string,
//     isCompleted: boolean,
//
// }
// export interface Note {
//     id: string,
//     title: string,
//     description: string,
//     addDate: string,
//     lastRedactDate: string,
//     color: string,
//     deg:number
// }
// export interface TaskState{
//     // noteWindRedactVisible: any
//     tasks:Task[],
//     notes:Note[],
//     name:string,
//     email:string,
//     creatDat:string,
//     // token:string,
//     accessToken:string|undefined
//     id:string,
//     pathImg:string,
//     redactedNote: undefined | Note
// }


const initialState = {
    tasks:[],
    notes:[],
    name: "",
    email: "",
    creatDat: "",
    accessToken: undefined,
    id:"",
    pathImg:'',
    redactedNote: undefined,
}

const defSlice = createSlice({
    name: 'defSlice',
    initialState,
    reducers:{


    }

})

export const {

} = defSlice.actions;
export default defSlice.reducer