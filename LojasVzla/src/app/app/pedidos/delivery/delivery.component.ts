import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
})
export class DeliveryComponent implements OnInit {

  @Input() delivery: number
  @Input() itemsValue: number

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return this.delivery + this.itemsValue
  }

}

