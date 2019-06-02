import { Component, Input, AfterViewChecked, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-teachers',
  templateUrl: './display-teachers.component.html',
  styleUrls: ['./display-teachers.component.scss']
})
export class DisplayTeachersComponent implements OnInit, AfterViewChecked {

@Input() arrTeachers:Array<number>;
@Input() imageSrct:Array<any>;
@Input() RHWt:Array<number>;
@Input() RGSt:Array<number>;
@Input() RRt:Array<number>;
@Input() namet:Array<string>;

constructor() { 
  
}

resopseiveT(){

  var body = document.body,
  html = document.documentElement;

var height = Math.min( body.scrollHeight, body.offsetHeight, 
                     html.clientHeight, html.scrollHeight, html.offsetHeight );

 var width = Math.min( body.scrollWidth, body.offsetWidth, 
                      html.clientWidth, html.scrollWidth, html.offsetWidth );

 
    for(var i = 0; i < this.arrTeachers.length;i++){
      var div = document.getElementById('ct' + i);
      div.style.height =   height / 4 + 'px';
        div.style.width =  (width * (4 / 10)) / 4 + "px";
  
  }
}

upperthree:boolean = true;

drowImg(event){
  var str:string = event;
  var canvas = <HTMLCanvasElement>document.getElementById(str);
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.save();
  ctx.translate(canvas.width / 2,canvas.height / 2);
  var img = <HTMLImageElement>document.getElementById("it" + str.slice(2,3));
  img.style.filter = "grayscale(" + this.RGSt[parseInt(str.slice(2,3))] + "%)";
  ctx.filter = "grayscale(" + this.RGSt[parseInt(str.slice(2,3))] + "%)";
  img.style.transform = "rotate(" + this.RRt[parseInt(str.slice(2,3))] + "deg)";
  ctx.rotate(this.RRt[parseInt(str.slice(2,3))] * Math.PI / 180);
  ctx.drawImage(img,-img.width / 2,-img.height / 2,img.width,img.height);
  ctx.restore();
  
  if(this.namet[parseInt(str.slice(2,3))]){
  ctx.font = "15px Arial";
  ctx.fillText(this.namet[parseInt(str.slice(2,3))],60,canvas.height - 10)
  }

}
    
readURL(event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      var str:string = event.target.id;
      const reader = new FileReader();
      reader.readAsDataURL(file);
 
      reader.onload = (e) => {this.imageSrct[parseInt(str.slice(2,3))] = reader.result;
        console.log(str.slice(1,3));
      
      }
  

  }
}

ngOnInit() {
  this.RHWt = new Array<number>(4);
  this.RGSt = new Array<number>(4);
  this.RRt = new Array<number>(4);
  this.namet = new Array<string>(4);
  this.imageSrct = new Array<string>(4);

  
  for(var i = 0;i < this.RGSt.length;i++){
    this.arrTeachers[i] = i;
    this.RHWt[i] = 50;
    this.RGSt[i] = 50;
    this.RRt[i] = 0;
  
  }
}

ngAfterViewChecked(){
  this.resopseiveT();


}



}
