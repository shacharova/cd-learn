import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'control1',
  templateUrl: './control1.component.html',
  styleUrls: ['./control1.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Control1Component implements OnInit {

  @Output('onEvent') public onEvent = new EventEmitter<string>();

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
