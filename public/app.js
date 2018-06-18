/* global $ */

$(document).ready(function(){
    $.getJSON("api/todos")
    .then(addTodos)
    .catch
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