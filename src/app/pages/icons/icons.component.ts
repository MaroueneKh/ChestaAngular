import { Component,OnInit,NgModule,Injectable,} from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@NgModule({
  imports:[HttpClient]
  })
  @Injectable({
    providedIn: 'root',
})
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  title = 'upload';
  uploadedFiles: Array < File > ;
  etat :Array<any> ;

  public copy: string;
  public image: string ;
  constructor(private http: HttpClient,) { }

  ngOnInit() {
    this.image="assets/img/theme/img_148071.png";
  }
  fileChange(element) {
    this.uploadedFiles = element.target.files;
}
  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("upload", this.uploadedFiles[i], this.uploadedFiles[i].name);
        this.image  = "C:/Users/marou/Documents/Python/nodePython/images"+"IM-0006-0001" ;
    }
    this.http.post('/api/upload',formData)
    .subscribe((response) => {
         console.log('response received is ', response);
    })
    this.http.post<JSON>('/api/predict',{'radio' : this.uploadedFiles[0].name}).subscribe(data => {
      console.log('response received is ', data);
      this.etat = data[0];
  });
  
  }
}
