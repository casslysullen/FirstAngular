import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-me',
  templateUrl: './help-me.component.html',
  styleUrls: ['./help-me.component.css']
})
export class HelpMeComponent implements OnInit {

  constructor() { }

  birthday = new Date(1992, 1, 16);

  userTyping: string = 'Cassly';
  ngOnInit(): void {
  }

}
