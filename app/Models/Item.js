import { generateId } from "../Utils/generateId.js"



export class Item {

constructor(data){
    this.id = data.id || generateId(),
    this.task = data.task
    this.listId = data.listId
}    

get Template(){
}

}