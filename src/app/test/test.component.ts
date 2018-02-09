import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public colorused = "orange";
  public variable;
  public text = "this is the text";
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  method(x)
  {

    this.colorused = x;
  }


  public colors = ["red", "blue" , "green" , "orange"];
  constructor() { }

  ngOnInit() {
  }
  public person = {
    "firstname": "Gunank",
    "lastname" : "Sood"
  }
  fireevent()
  {
    this.childEvent.emit("Hey I am the message from Child Component");
/**this.variable = "Some text";*/
  }
  public date = new Date();
}
