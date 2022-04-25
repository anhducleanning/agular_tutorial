import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Anh Đức';
  public age = 20 ;
  public nameSmartPhone = ['Apple','SamSung','Xiaomi','Nokia','Google','Oppo'];
  public priceSmarPhone = ['1000','2000','450','656','546','225'];

  public nameSPObject = [
    { ten : 'Apple',gia : 1000,   hagia :true},
    {ten :'SamSung',gia : -200,hagia :false},
    {ten :'Xiaomi',gia : 423,hagia :true},
    {ten :'Nokia',gia : 545,hagia :false},
    {ten :'Google',gia : - 213,hagia :true},
    {ten :'Oppo',gia : 518,hagia :false},
]


  constructor() { }

  ngOnInit(): void {
  }


}
