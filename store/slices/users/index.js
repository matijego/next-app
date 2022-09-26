import { createSlice } from "@reduxjs/toolkit/dist/createSlice";


const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: []
    },
    reducers: {

    }

});

export default userSlice.reducer;

export const getUsers = async () => {
    try{
        const API = 'https://rickandmortyapi.com/api/character/1,2,3,4,5,6';
        const res = await axios.get(API);
        return res.data.menu;    
    }catch(error){
        alert('No se pudo cargar el menú principal!');
        return [];
    }
};
