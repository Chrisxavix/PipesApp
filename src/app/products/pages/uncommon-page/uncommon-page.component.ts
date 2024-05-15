import { Component } from '@angular/core';
import { log } from 'console';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  /* Select */
  public name: string = "Christian";
  public gender: "male" | "female" = "male";
  public invitationMap = {
    male: "invitarlo",
    female: "invitarla"
  }

  changeClient(): void {
    this.name = "Meslissa";
    this.gender = "female";
  }

  /* Plural */
  public clients: string[] = ["Maria", "Pedro", "Fernando", "Eduardo", "Hernando", "Melissa"];
  public clientsMap = {
    "=0": "no tenemos ningún cliente esperando.",
    "=1": "tenemos un cliente esperando.",
    "=2": "tenemos dos clientes esperando.",
    "other": "tenemos # clientes esperando."
  }

  deleteClient(): void {
    this.clients.shift();
  }

  /* KeyValue */
  public person = {
    name: "Fernando",
    age: 36,
    address: "Ottwa, Canada"
  }

  /* Async */
 /*  public myObservableTimer = interval(100)
  .pipe(
    tap(value => console.log("tap", value)
    )
  ); */

}
