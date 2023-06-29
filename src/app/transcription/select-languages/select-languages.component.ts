import { LANGUAGES } from '../../languages.constants';
import { Component, Input, OnInit } from '@angular/core';
import { TransOptions } from '../models/trans-optiond';

@Component({
  selector: 'app-select-languages',
  templateUrl: './select-languages.component.html',
  styleUrls: ['./select-languages.component.scss'],
})
export class SelectLanguagesComponent implements OnInit {
  @Input() transOptions!: TransOptions;
  languages = LANGUAGES;

  constructor() {}

  ngOnInit(): void {}
}
