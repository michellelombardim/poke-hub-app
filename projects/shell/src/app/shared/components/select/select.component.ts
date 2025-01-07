import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SelectOptions } from '../../../core/models/select.model';

@Component({
  selector: 'app-select',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  label = input<string>('');
  id = input.required<string>();
  controlName = input.required<FormControl>();
  placeholder = input.required<string>();
  items = input.required<SelectOptions[]>();
}
