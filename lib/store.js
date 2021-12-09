import axios from "axios";
import { atom, selector } from "recoil";

export const userState= atom({
    key:'userState',
    default:null
})

export const userSelector= selector({
    key:'userSelector',
    get:async() => {
        try{
            const res= await axios.get('https://jsonplaceholder.typicode.com/users');
            return res.data
        } catch(error){
            console.log(error)
            alert('error! check your console')
        }
    }
})
