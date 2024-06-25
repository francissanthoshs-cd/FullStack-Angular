import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { connect } from 'http2';
import { log } from 'console';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent implements OnInit {
  constructor(private service: ApiserviceService) { }

  readData: any;
  successmsg: any;

  ngOnInit(): void {
    this.getAllData();
  }

  //getdeleteid
  deleteID(id: any) {
    console.log("deleteid==>", id);
    this.service.deleteData(id).subscribe((res) => {
      console.log('delteres==>', res);
      this.successmsg = res.message;
      this.getAllData();
    })
  }

  // getData
  getAllData() {
    this.service.getAllData().subscribe((res) => {
      console.log('res==>', res)
      this.readData = res.data;
    })
  }

}
