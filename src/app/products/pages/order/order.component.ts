import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/Hero.interface';
import { log } from 'console';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{

  public heroes!: Hero[];
  public isUpperCase: boolean = false;
  public sortByValue: keyof Hero = "name";

  constructor() {
  }

  ngOnInit(): void {
    this.heroes = [
      {
        name: "Goku",
        canFly: true,
        color: Color.black,
      },
      {
        name: "Chuty",
        canFly: false,
        color: Color.blue,
      },
      {
        name: "Vegeta",
        canFly: true,
        color: Color.red,
      }
  ];
  }

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero): void {
    this.sortByValue = value;
  }

}
