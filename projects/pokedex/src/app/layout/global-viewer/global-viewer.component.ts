import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-global-viewer',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './global-viewer.component.html',
  styleUrl: './global-viewer.component.scss',
})
export class GlobalViewerComponent {}
