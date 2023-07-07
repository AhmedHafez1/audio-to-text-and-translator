import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = 'default-theme';

  // Inject the overlay container
  constructor(private overlayContainer: OverlayContainer) {
    // Apply the initial theme to the overlay container
    this.overlayContainer
      .getContainerElement()
      .classList.add(this.currentTheme);
  }

  // Set a new theme
  setTheme(theme: string) {
    // Remove the old theme from the overlay container
    this.overlayContainer
      .getContainerElement()
      .classList.remove(this.currentTheme);
    // Update the current theme
    this.currentTheme = theme;
    // Add the new theme to the overlay container
    this.overlayContainer
      .getContainerElement()
      .classList.add(this.currentTheme);
  }
}
