import { LANGUAGES } from './../languages.constants';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-languages',
  templateUrl: './select-languages.component.html',
  styleUrls: ['./select-languages.component.css'],
})
export class SelectLanguagesComponent implements OnInit {
  @Input() selectedLanguagesOptions!: Record<string, string>;
  languages = LANGUAGES;

  constructor() {}

  ngOnInit(): void {}
}
