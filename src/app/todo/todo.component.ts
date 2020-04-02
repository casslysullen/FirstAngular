import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
    todo: Todo[] = [
        {
            task: 'fold clothes',
            completed: false
        },
        {
            task: 'put clothes in dresser',
            completed: false
        },
        {
            task: 'relax',
            completed: false
        },
        {
            task: 'try to pet cat',
            completed: true
        },
        {
            task: 'pet dog',
            completed: false
        },
        {
            task: 'be awesome',
            completed: false
        }
    ];

    newTodo = '';

    addTask(newTodo) {
        console.log("newItem");
        this.todo.push({
            task: newTodo,
            completed: false

        });
        this.newTodo = '';
    }

    removeTask(item) {
        this.todo = this.todo.filter(t => t.task !== item.task);
    }

    completeTask(itemCompleted) {
        itemCompleted.completed = !itemCompleted.completed;
    }

    ngOnInit(): void {

    }
}

