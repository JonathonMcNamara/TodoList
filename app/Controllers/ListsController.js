import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"

function _drawList(){
    let template = ''
    let lists = ProxyState.lists
    lists.forEach(l => template += l.Template)
    document.getElementById('list').innerHTML = template
}


export class ListsController{
    constructor(){
        console.log('controller loaded')
        _drawList()
    }
}