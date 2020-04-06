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

    newTodo: Todo[] = [{
        task: '',
        completed: false
    }]


    addTask(item) {
        var newTodo = {
            task: item,
            completed: false
        };

        this.todo.push(newTodo);
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

