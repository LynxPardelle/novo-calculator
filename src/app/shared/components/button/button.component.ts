import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string = '';
  @Input() bg: string = '';
  ngOnInit(): void {
    this.setCurrentStyles();
  }

  currentStyles: Record<string, string> = {};

  setCurrentStyles() {
    /* Esta función setea los estílos al iniciar el componente,
    si usamos la palabra blue se hace el botón azul que usan en el diseño */

    this.currentStyles = {
      'background-color':
        this.bg === 'blue' ? '#001965' : 'rgba(255, 255, 255, 0)',
      padding: this.bg === 'blue' ? '21px' : '19px',
      'border-radius': '25px',
      color: this.bg === 'blue' ? 'white' : 'black',
      border: this.bg === 'blue' ? '' : 'solid #001965',
    };
  }
}
