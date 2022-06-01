import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class C4Component implements OnInit {

  @Output('onEvent') public onEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
