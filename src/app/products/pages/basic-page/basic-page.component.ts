import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  public nameLower: string = "christian";
  public nameUpper: string =  "CHRISTIAN";
  public fullName: string = "cHrIsTiAn ChIlLoGaLlI";

  public customDate: Date = new Date;
}
