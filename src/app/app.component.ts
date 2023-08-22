import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apptareas';

  constructor (private services: SharedService){}

  notes:any=[];

  listNotes (){
    this.services.getNotes().subscribe((res)=>{
      this.notes = res;
  })  
  }

  ngOnInit (){
    this.listNotes
  }
    

  addNotes(newNote: string){
    this.services.addNotes(newNote).then((res)=>{
      console.log(res);
      this.listNotes();
      
    })

  }

  deleteNotes(id: string){
    this.services.deleteNotes(id).then((res)=>{
      this.listNotes();
    })
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

