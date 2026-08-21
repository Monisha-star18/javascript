import {baseUrl} from './shared.js' 


$("#addTask-btn").on('click',function(){
    let inputValue = $("#todo-input").val()
    console.log(inputValue)

    
    $(".display-container").prepend
    (
                `<div class="card m-4 p-3 bg-primary text-light">
                    <div class="card-body">
                        <h1 class="card-title">${inputValue}</h1>
                        <div class="btnGroup">
                            <button class="btn btn-warning">Edit the task</button>
                            <button class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>`
    )
})  

$("#clear-btn").on('click',function(){
    $("#todo-input").val('')
})
