import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
  
  
  constructor(private http:HttpClient){}
  
  ngOnInit(): void {
  }
  file:any;
  getFile(event:any){
    this.file=event.target.files[0];
    console.log('file',this.file);
  }

  // uploadFile(){
  //   let formData=new FormData();
  //   formData.set("file", this.file)

  //   this.http.post('http://localhost:4200/assets/data', FormData ).subscribe((_response) => {});
  // }
}
