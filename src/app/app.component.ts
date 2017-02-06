import { Component } from '@angular/core';

@Component({
  selector: 'ho-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = "Welcome to Heroes App with extra powers.";

  onChangeTitle(): void {
    this.title = this.title + " more";
  }
}
