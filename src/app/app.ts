import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from "./componants/hero/hero";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Time-Lens');
}
