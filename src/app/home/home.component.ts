import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Anh Đức';
  public age = 20;


  public nameSPObject = [
    { ten: 'Apple', gia: 1000, hagia: true },
    { ten: 'SamSung', gia: -200, hagia: false },
    { ten: 'Xiaomi', gia: 423, hagia: true },
    { ten: 'Nokia', gia: 545, hagia: false },
    { ten: 'Google', gia: -213, hagia: true },
    { ten: 'Oppo', gia: 518, hagia: false },
  ];

  public districts: string[] = ['Quận Huyện'];

  public vietNamData = [
    { 
      city: 'Tỉnh/Thành Phố', 
      district: ['Quận Huyện']
     },
    {
      city: 'Quảng Ninh',
      district: [
        'Thành phố Hạ Long',
        'Thành phố Móng Cái',
        'Thị xã Cẩm Phả',
        'Thị xã Uông Bí',
        'Huyện Ba Chẽ',
        'Huyện Bình Liêu',
        'Huyện Cô Tô',
        'Huyện Đầm Hà',
        'Huyện Đông Triều',
        'Huyện Hải Hà',
        'Huyện Hoành Bồ',
        'Huyện Quảng Yên',
        'Huyện Tiên Yên',
        'Huyện Vân Đồn',
      ],
    },
    {
      city: 'Hà Nội',
      district: [
        'Quận Ba Đình',
        'Huyện Ba Vì',
        'Quận Bắc Từ Liêm',
        'Quận Cầu Giấy',
        'Huyện Chương Mỹ',
        'Huyện Đan Phượng',
        'Huyện Đông Anh',
        'Quận Đống Đa',
        'Huyện Gia Lâm',
        'Quận Hà Đông',
        'Quận Hai Bà Trưng',
        'Huyện Hoài Đức',
        'Quận Hoàn Kiếm',
        'Quận Hoàng Mai',
        'Quận Long Biên',
        'Huyện Mê Linh',
        'Huyện Mỹ Đức',
        'Quận Nam Từ Liêm',
        'Huyện Phú Xuyên',
        'Huyện Phúc Thọ',
        'Huyện Quốc Oai',
        'Huyện Sóc Sơn',
        'Thị xã Sơn Tây',
        'Quận Tây Hồ',
        'Huyện Thạch Thất',
        'Huyện Thanh Oai',
        'Huyện Thanh Trì',
        'Quận Thanh Xuân',
        'Huyện Thường Tín',
        'Huyện Ứng Hòa',
      ],
    },
  ];

  constructor() {}

  public ngOnInit(): void {
    console.log('vietnamData', this.vietNamData);
  }

  public changeCity(event: any) {
    const city = event.target.value;
    if (!city) {
      return;
    }

    // const search = this.vietNamData.filter((data) => data.city === city);
    // console.log('search',search);
    // if(search && search.length > 0){
    //   this.districts = search[0].district;
    // }

    this.districts =
      this.vietNamData.find((data) => data.city === city)?.district || [];
  }
}
