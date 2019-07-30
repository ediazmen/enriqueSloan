import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  name: string;
  @Input() certainMessage;

  @Output() starChange = new EventEmitter()

  urlRename() {
    this.name = "nameTest";
    this.starChange.emit(name);
  }

  constructor() { }

  ngOnInit() {
  }

}
