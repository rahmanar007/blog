import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatTableDataSource, MatSort, MatDialog } from "@angular/material";

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-customer-entry',
  templateUrl: './customer-entry.component.html',
  styleUrls: ['./customer-entry.component.scss']
})
export class CustomerEntryComponent implements OnInit {

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  idProofs = ['Licence', 'VoterId', 'Pan Card', 'Other'];
  roomtype = ['AC', 'Non/Ac'];
  date = '';
  time: string;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private datePipe: DatePipe, public dialog: MatDialog) { }

  ngOnInit() {
    //$('.collapse').collapse()
    this.date = this.datePipe.transform(new Date, "dd-MM-yyyy");
    this.time = this.datePipe.transform(new Date, "h:mm:ss a");
    setInterval(() => {
      this.time = this.datePipe.transform(new Date, "h:mm:ss a");
    }, 1000);

  }
  entry: any = {
    name: '',
    email:'',
    age: '',
    dob: '',
    address: '',
    url: '',
    gender: ''
  };
  animal: string;
  name: string;
  

  columns = [{
    prop: 'name',
    title: 'Name'
  }, {
    prop: 'age',
    title: 'Age'
  }, {
    prop: 'gender',
    title: 'Gender'
  },{
    prop: 'date',
    title: 'DOB'
  }, {
    prop: 'email',
    title: 'Email'
  }, {
    prop: 'address',
    title: 'Address'
  }, {
    prop: 'url',
    type: 'url',
    title: 'URL'
  }];
  data: any[] = [{
    name: 'Rahman AR',
    age: 26,
    gender: 'Male',
    email: 'rahman.godisgreat07@gmail.com',
    date: '04-01-1994',
    address: 'Madurai',
    url: 'http://www.rahmanblog.com'
  }];

  onDelete(rowIndex) {
    this.data.splice(rowIndex, 1);
  }
  onAdd() {
    var isemail = this.validateEmail(this.entry.email);
   if(isemail){
    this.entry.date = this.datePipe.transform(this.entry.date, "dd-MM-yyyy");
    if (typeof (this.entry._index) !== 'undefined') {
      this.data.splice(this.entry._index, 1, Object.assign({}, this.entry));
    } else {
      this.data.push(Object.assign({}, this.entry));
    }
    this.entry = {};
  }
}
  onEdit(rowIndex) {
    const entry = this.data[rowIndex];
    entry._index = rowIndex;
    this.entry = Object.assign({}, entry);
  }


  validateEmail(emailField){
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

 

    if( this.entry.name == "" ) {
            alert( "Please provide your Name!" );
            return false;
    }

    if( this.entry.age == "" ) {
            alert( "Please provide your Age!" );
            return false;
    }
    if( this.entry.gender == "" ) {
            alert( "Please provide your Gender!" );
            return false;
    }

    if(!this.entry.date) {
            alert( "Please provide your Date of Birth!" );
            return false;
    }

    if(!emailField.match(reEmail)) {
            alert("Invalid email address");
             return false;
    }
    if( this.entry.address == "" ) {
            alert( "Please provide your Address!" );
            return false;
    }

    if( this.entry.url == "" ) {
            alert( "Please provide your URL!" );
            return false;
    }

  return true;
}
}

