import { Component, OnInit } from '@angular/core';
// import {FormControl} from '@angular/forms';
import {AjaxService} from '../ajax.service';
@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss']
})
export class AjaxComponent implements OnInit {
public items = [];
private array;
  constructor(private ajaxService: AjaxService) { }
  search(input: any) {
this.ajaxService.fetchdata(input.value).subscribe(data => {
  this.array = data;
  this.items = this.array.items;
});
  }

  ngOnInit() {
    // this.ajaxService.getdata().subscribe(item=>this.data=item)
  }

}
