import { Component, Input, OnInit } from '@angular/core';
import { TransOptions } from '../models/trans-options';

@Component({
  selector: 'app-select-input-way',
  templateUrl: './select-input-way.component.html',
  styleUrls: ['./select-input-way.component.scss'],
})
export class SelectInputWayComponent implements OnInit {
  @Input() transOptions!: TransOptions;
  constructor() {}

  ngOnInit(): void {}
}
