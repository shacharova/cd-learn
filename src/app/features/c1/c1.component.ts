import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class C1Component implements OnInit {

  @Output('onEvent') public onEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
