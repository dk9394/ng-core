import { Component, OnInit } from '@angular/core';

interface IMenu {
  name: string;
  link: string;
  active: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: IMenu[] = [
    {
      name: 'RxJs Basics',
      link: 'rxjs-basics',
      active: true
    },
    {
      name: 'Template Basics',
      link: 'template-basics',
      active: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
