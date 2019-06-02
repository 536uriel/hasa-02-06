import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';


@Component({
  selector: 'app-display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.scss']
})
export class DisplayStudentsComponent implements OnInit ,AfterViewChecked {
  @Input() arrStudents:Array<number>;
  @Input() imageSrc:Array<any>;
  @Input() RHW:Array<number>;
  @Input() RGS:Array<number>;
  @Input() RR:Array<number>;
  @Input() name:Array<string>;
    
    


  constructor() { 
   
   
  }

  upperthree:boolean = true;
  wupload:number = 50;
  hupload:number = 50;

  resopseiveStu(){

    var body = document.body,
    html = document.documentElement;

var height = Math.min( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );



    if(this.arrStudents.length <= 9){
      for(var i = 0; i < this.arrStudents.length;i++){
        var div = document.getElementById('c' + i);
        div.style.height =   height / 4 + 'px';
        div.style.width =  "calc(100% * (1/3) - 10px - 1px)";
        
      }

      this.hupload =  height / 9;
      this.wupload = height / 7;

    }else if(this.arrStudents.length > 9 && this.arrStudents.length <= 16){
      for(var i = 0; i < this.arrStudents.length;i++){
        var div = document.getElementById('c' + i);
        div.style.height =   height / 5 + 'px';
        div.style.width =  "calc(100% * (1/4) - 10px - 1px)";
      }

      this.hupload =  height / 10;
      this.wupload = height / 9;

    }else{
      for(var i = 0; i < this.arrStudents.length;i++){
        var div = document.getElementById('c' + i);
        div.style.height =   height / 7 + 'px';
        div.style.width =  "calc(100% * (1/6))";
      }

      this.hupload =  height / 11;
      this.wupload = height / 10;
    }
  }


      
  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        var str:string = event.target.id;
        const reader = new FileReader();
        reader.readAsDataURL(file);
   
        reader.onload = (e) => {this.imageSrc[parseInt(str.slice(1,3))] = reader.result;}
    
  
    }
}

  ngOnInit() {


    this.RHW = new Array<number>(16);
    this.RGS = new Array<number>(16);
    this.RR = new Array<number>(16);
    this.name = new Array<string>(16);
    
    for(var i = 0;i < this.RGS.length;i++){
      this.arrStudents[i] = i;
      this.RHW[i] = 50;
      this.RGS[i] = 50;
      this.RR[i] = 0;
    
    }
  }

  ngAfterViewChecked(){

    this.resopseiveStu();

  }



}


