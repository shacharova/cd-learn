import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class C2Component implements OnInit {

  @Output('onEvent') public onEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
