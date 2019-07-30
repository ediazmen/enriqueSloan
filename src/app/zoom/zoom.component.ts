import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent implements OnInit {
  @Input() zoom: number
  @Output() zoomChange = new EventEmitter

  zoomIncrement() {
    this.zoom += 0.2;
    this.zoomChange.emit(this.zoom)
  }

  zoomDecrement() {
    this.zoom -= 0.2;
    this.zoomChange.emit(this.zoom)
  }

  constructor() {
    this.zoom = 0.5;
  }

  ngOnInit() {
  }

}
