import { generateId } from "../Utils/generateId.js"
import { ProxyState } from "../AppState.js"


export class List{
    constructor(data){
        this.id = data.id || generateId()
        this.name = data.name
    }

    get Template(){
        return `
        <div class="row">
            <div class="text-center col-4 bg-white elevation-2 rounded">
            <h2 class="">${this.name}</h2>
            <p>List all ur stuff</p>
            ${this.Items}
            <p>List all ur stuff</p>
            </div>
        </div>
        
        `
    }

    get Items(){
        let template = ''
        let items = ProxyState.items.filter(item => item.listId == this.id) 
        items.forEach(item => template += item.Template)
        if (template){
            return template
        } else {
           return `<p>No tasks</p>`
        }
        }
}

