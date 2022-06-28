import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  activeTab:any = "Basic";
  tabName:any = "Basic";
  constructor() { }

  ngOnInit(): void {
  }

  changeBreadcrumb(NewTabName:any){
		this.tabName = NewTabName;	
	}

}
