import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  imports: [NgStyle],
  selector: 'app-test',
  styleUrl: './test.scss',
  templateUrl: './test.html',
})
export class Test {
  title: string = 'Це інтерполяція';
  firstName: string = 'Станіслав';
  lastName: string = 'Ганчев';

  isEnabled: boolean = true;

  isActive: boolean = true;
  isDisabled: boolean = false;

  getFullName() {
    return `Мене звуть ${this.firstName} ${this.lastName}`;
  }
}
