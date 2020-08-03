import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-favouirt',
  templateUrl: './favouirt.component.html',
  styleUrls: ['./favouirt.component.scss']
})
export class FavouirtComponent implements OnInit {
  @Input() title;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  changeTitle() {
    this.title = "New Title from Child";
    this.change.emit(this.title);
  }
}
