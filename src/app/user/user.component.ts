import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataBaseService } from '../data-base.service';
import html2canvas from 'html2canvas';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {





cuptureScreen(){
  var con = document.getElementById("container");
  html2canvas(con).then((canvas)=>{

    var ctx = canvas.getContext("2d");
    ctx.canvas.toBlob((blob) => {
      console.log(blob); //output image as a blob
      this.zipfile = new File([blob], "fileName", {
          type: "mime",
          lastModified: Date.now()
      }); 
      this.DB.addImg(this.zipfile);
      alert("your memoty send to the data base!")
    }, "mime", "quality");
  });

  
}

  storeImg:any = {img:''};
  height:number;
  maincanvas:string = " ";
  zipfile:any;
  
  
 constructor(public auth:AuthService,private DB:DataBaseService){
 
  for(var i = 0;i < this.range.length;i++){
    this.range[i] = 50;
    this.range2[i] = 50;
    this.range3[i] = 0;
  }

  for(let i = 0;i < this.studentsArr.length;i++){
   this.studentsArr[i] = i;
 }

 for(var i = 0;i < this.ranget.length;i++){
  this.ranget[i] = 50;
  this.range2t[i] = 50;
  this.range3t[i] = 0;
}


for(let i = 0;i < this.teachersArr.length;i++){
 this.teachersArr[i] = i;
}



}






 studentsArr:Array<number> = new Array<number>(16);
 range:Array<number> = new Array<number>(16);
 range2:Array<number> = new Array<number>(16);
 range3:Array<number> = new Array<number>(16);
 stuName:Array<string> = new Array<string>(16);
 imgS:Array<any> = new Array<any>(this.studentsArr.length);
 
 teachersArr:Array<number> = new Array<number>(4);
 ranget:Array<number> = new Array<number>(4);
 range2t:Array<number> = new Array<number>(4);
 range3t:Array<number> = new Array<number>(4);
 stuNamet:Array<string> = new Array<string>(4);
 imgSt:Array<any> = new Array<any>(this.teachersArr.length);

 setStudentsArrey(event){
 
    this.studentsArr.length = event;
    this.range.length = event;
    this.range2.length = event;
    this.range3.length = event;
    this.stuName.length = event;
    this.imgS.length = event;

    for(var i = 0;i < this.range.length;i++){
      this.range[i] = 50;
      this.range2[i] = 50;
      this.range3[i] = 0;
      this.imgS[i] = '';
    }

    for(let i = 0;i < this.studentsArr.length;i++){
     this.studentsArr[i] = i;
   }
   

 }

 setTechersArrey(event){
   this.teachersArr.length = event;
   this.ranget.length = event;
   this.range2t.length = event;
   this.range3t.length = event;
   this.stuNamet.length = event;
   this.imgSt.length = event;

   for(var i = 0;i < this.ranget.length;i++){
     this.ranget[i] = 50;
     this.range2t[i] = 50;
     this.range3t[i] = 0;
   }

   
   for(let i = 0;i < this.teachersArr.length;i++){
    this.teachersArr[i] = i;
  }

 }

  ngOnInit() {
    
    var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

      var con = document.getElementById("container");
      con.style.height = height + "px";
  }

}
