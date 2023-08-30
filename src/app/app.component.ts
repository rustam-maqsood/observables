import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subject, from, interval, observable, of } from 'rxjs';
import {filter, map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'observables';
  defaultCountry = 'india';
  firstname!: string;
  lastname!: string;
  email!: string;
  gen!: string;
  country!: string;
  gender=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'},
    {id:'3',value:'Other'},
  ]
  // //creating observables by using constructor method..
  // myobservable = new Observable((observer)=>{
  //   console.log('Observable starts');
  //   setTimeout(()=>{observer.next("1")},1000)
  //   setTimeout(()=>{observer.next("2")},2000)
  //   // setTimeout(()=>{observer.error(new Error("Something Went Wrong! please try again"))},3000)
  //   setTimeout(()=>{observer.next("4")},4000)
  //   setTimeout(()=>{observer.next("5")},5000)
  //   setTimeout(()=>{observer.complete()},6000)
  // });
  

//   //creating observable by using create Method.
//     myobservable = Observable.create((observer: {
//     error(arg0: Error): unknown; next: (arg0: string) => void; complete: () => void; 
// })=>{
//        console.log('Observable starts');
//        setTimeout(()=>{observer.next("A")},1000)
//        setTimeout(()=>{observer.next("B")},2000)
//       //  setTimeout(()=>{observer.error(new Error("Something Went Wrong! please try again"))},3000)
//        setTimeout(()=>{observer.next("D")},4000)
//        setTimeout(()=>{observer.next("E")},5000)
//        setTimeout(()=>{observer.complete()},6000)
//   });

//creating observables using of operator of and from:
array1=[1,2,3,4,5];
array2=['A','B','C'];
//myobservable=of(this.array1,this.array2,20,'Hellow');
//map and filters are observables operators
//  myobservable=from(this.array1).pipe(map((val)=>{
//   return val * 5;
//  }),(filter((val)=>{
//    return val >= 15;
//     })));

//  transformedobs = this.myobservable.pipe(map((val)=>{
//   return val * 5;
//  }),(filter((val)=>{
//    return val >= 15;
//     })));
//  filteredobs = this. transformedobs.pipe(filter((val)=>{
//   return val >= 15;
//  })); 
counterObservable = interval(1000);
counterSub:any;
  ngOnInit(){
    // this. myobservable.subscribe( (val: any)=>{
    //     console.log(val);
    // },(error: { message: any; })=>{
    //   alert(error.message);
    // },()=>{
    //   alert('observable has complete all value emitted ')
    // });

    // //subject
    // const subject = new Subject();
    // subject.subscribe(d=>console.log(d));
    // subject.subscribe(d=>console.log(d));
    // // subject.next(2020);
    // //behavior subject
    // const bSubject = new BehaviorSubject<number>(12);
    // bSubject.subscribe(d=>console.log(`BehaviorSubject Subscriber 1 $(d)`));
  }

  unsubscribe(){
    this.counterSub.unsubscribe();
  }
  subscribe(){
    this.counterSub=this.counterObservable.subscribe((val: any)=>{
      console.log(val);
    })
  }
  @ViewChild('myForm')
  form!: NgForm;
  onSubmit(){
    console.log(this.form);
    // this.firstname = this.form.value.personDetails.firstname;
    // this.lastname = this.form.value.personDetails.lastname;
    // this.email = this.form.value.personDetails.email;
    // this.gen =this.form.value.gender;
    // this.country = this.form.value.country;
  }
}
 