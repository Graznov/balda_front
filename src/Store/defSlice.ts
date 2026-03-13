import {createSlice} from '@reduxjs/toolkit'

interface gameData {
    gameId: string,
    letersField:Array<string>,
    startWord:string,//стартовое слово
    playerOne:{ //данные игроков
        idPlayer:string, //глобальный id игрока из бд
        avaPlayer:string, //ссылка на аватарку
        rating:string, //рейтинг игрока
        // startWord:{
        //     status:boolean, //задает стартовое слово
        //     word:string|null,//стартовое слово
        // }
        counterLetter:number|null, //счетчик букв игровой сессии
        words:Array<string>,//слова данной игровой сессии
        askWord:boolean, //запрос согласия соперника на выбранное слово
        // setStartWord:boolean
    },
    playerTwo:{
        idPlayer:string,
        avaPlayer:string,
        rating:string,
        // startWord:{
        //     status:boolean,
        //     word:string|null,
        // }
        counterLetter:number|null,
        words:Array<string>,
        askWord:boolean,
        playerSetStartWord:boolean
    },

}

const initialState = {
    gameId: 'string',
    letersField:['', '', '', '', '', '', '', '', '', '','', '', '', '', '','', '', '', '', '','', '', '', '', '',],
    startWord:'',//стартовое слово
    playerOne:{ //данные игроков
        idPlayer:'1', //глобальный id игрока из бд
        avaPlayer:'string', //ссылка на аватарку
        rating:'string', //рейтинг игрока
        // startWord:{
        //     status:true, //задает стартовое слово
        //     word:'',//стартовое слово
        // },
        counterLetter:0, //счетчик букв игровой сессии
        words:[],//слова данной игровой сессии
        askWord:false, //запрос согласия соперника на выбранное слово
        playerSetStartWord:true
    },
    playerTwo:{
        idPlayer:'2',
        avaPlayer:'string',
        rating:'string',
        // startWord:{
        //     status:false,
        //     word:null,
        // },
        counterLetter:0,
        words:[],
        askWord:false,
        playerSetStartWord:false
    },
}

const defSlice = createSlice({
    name: 'defSlice',
    initialState,
    reducers:{
        setStartWord(state, action){
            state.startWord = action.payload
            state.letersField[10]=action.payload[0]
            state.letersField[11]=action.payload[1]
            state.letersField[12]=action.payload[2]
            state.letersField[13]=action.payload[3]
            state.letersField[14]=action.payload[4]
        },


    }

})

export const {
    setStartWord
} = defSlice.actions;
export default defSlice.reducer