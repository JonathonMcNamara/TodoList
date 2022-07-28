import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";


class ListsService{
    constructor(){
    console.log('listing service',List)
    }
}


export const listService = new ListsService()