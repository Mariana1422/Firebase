import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( private fs: Firestore) { }

  getNotes(){
    let notesCollection= collection (this.fs, 'tasks');
    return collectionData(notesCollection,{idField: 'id'} )

  }

  addNotes (desc: string){
    let data ={ description: desc };
    let notesCollection= collection (this.fs, 'tasks');
    return addDoc (notesCollection, data);
  }

  deleteNotes (id: string){
    let docRef = doc(this.fs, 'tasks/' + id);
    return deleteDoc (docRef);
  }
}
