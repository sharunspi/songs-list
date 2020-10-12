import { combineReducers } from 'redux';


const songsReducer = ()=>{
    return [
        {
            title:'La la la',
            duration:'4:02'
        },
        {
            title:'saminamana',
            duration:'3:02'
        }
        ,
        {
            title:'hoai hoi ',
            duration:'3:18'
        }
    ];
};
const selectedSongReducer = (selectedSong=null,action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}
export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})