import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-input-way',
  templateUrl: './select-input-way.component.html',
  styleUrls: ['./select-input-way.component.scss'],
})
export class SelectInputWayComponent implements OnInit {
  @Input() selectedLanguagesOptions!: Record<string, string>;
  constructor() {}

  ngOnInit(): void {}
}
