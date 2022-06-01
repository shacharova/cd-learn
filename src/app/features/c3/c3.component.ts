import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class C3Component implements OnInit {

  @Output('onEvent') public onEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
