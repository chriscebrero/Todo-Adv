/* global $ */

$(document).ready(function(){
    $.getJSON("api/todos")
    .then(addTodos)
    
    $('#todoInput').keypress(function(event){
        if (event.which == 13) {
            //createtodo
            createTodo();
        }
    })
});

function addTodos(todos) {
    //add todos to the page
    todos.forEach(function(todo){
        var newTodo = $('<li class="task">' + todo.name + '</li>');
        if(todo.completed){
            newTodo.addClass("done");
        }
        $('.list').append(newTodo);
    });
}

function createTodo(){
    // send request to create
    var userInput = $('#todoInput').val();
   $.post('/api/todos',{name: userInput })
}