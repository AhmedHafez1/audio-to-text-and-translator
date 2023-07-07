import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  // Define the available themes
  themes = [
    { name: 'Default', value: 'default-theme' },
    { name: 'Dark', value: 'dark-theme' },
    { name: 'Custom', value: 'custom-theme' },
  ];

  constructor(
    private authService: AuthService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {}

  onThemeChange(event: any) {
    this.themeService.setTheme(event.value);
  }

  logout(): void {
    this.authService.logout();
  }
}
