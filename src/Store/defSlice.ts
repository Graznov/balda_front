import {createSlice} from '@reduxjs/toolkit'

interface gameData {
    gameId: string,
    letersField:Array<string>,
    playerOne:{ //данные игроков
        idPlayer:string, //глобальный id игрока из бд
        avaPlayer:string, //ссылка на аватарку
        rating:string, //рейтинг игрока
        startWord:{
            status:boolean, //задает стартовое слово
            word:string|null,//стартовое слово
        }
        counterLetter:number|null, //счетчик букв игровой сессии
        words:Array<string>,//слова данной игровой сессии
        askWord:boolean, //запрос согласия соперника на выбранное слово
    },
    playerTwo:{
        idPlayer:string,
        avaPlayer:string,
        rating:string,
        startWord:{
            status:boolean,
            word:string|null,
        }
        counterLetter:number|null,
        words:Array<string>,
        askWord:boolean,
    },

}

const initialState = {
    gameId: 'string',
    letersField:[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ','Б', 'А', 'Л', 'Д', 'А',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',],
    playerOne:{ //данные игроков
        idPlayer:'1', //глобальный id игрока из бд
        avaPlayer:'string', //ссылка на аватарку
        rating:'string', //рейтинг игрока
        startWord:{
            status:true, //задает стартовое слово
            word:'',//стартовое слово
        },
        counterLetter:0, //счетчик букв игровой сессии
        words:[],//слова данной игровой сессии
        askWord:false, //запрос согласия соперника на выбранное слово
    },
    playerTwo:{
        idPlayer:'2',
        avaPlayer:'string',
        rating:'string',
        startWord:{
            status:false,
            word:null,
        },
        counterLetter:0,
        words:[],
        askWord:false,
    },
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