import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Products } from 'src/app/product';


@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent {

  products:Products[] = [];

  toggled:boolean = false;
  
constructor(private dataService:DataService){}

ngOnInit():void{};
getProduct(){
  this.dataService.getProducts().subscribe({
    next:(response)=>{
      this.products = response;
      console.log(this.products);
      console.log(response)},
      error:(err)=> {
        console.log(err)    
      }
  })
}
toggleColor(id:any){

  this.selectedProduct = id;

  let toToggle = this.products.filter(item=>id===item.id);

}
}

