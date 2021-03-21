import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  displayedColumn = ['image', 'name', 'price', 'stock', 'action'];
  dataSource = new MatTableDataSource<Product>();
  textSearch: string;

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() {
    this.textSearch="";
    
   }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.feedData();
  }

  feedData()
  {
    
    const dummy : Product []=
    [
      {
        name: "libero libero libero libero libero libero libero libero libero libero libero libero libero libero libero libero libero",
        stock: 1222222,
        price: 10000,
        image: "https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703-1024x713.jpeg"
    
      },
      {
        name: "mac book",
        stock: 2333333,
        price: 20000,
        image: "https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703-1024x713.jpeg"
    
      },
      {
        name: "mac book",
        stock: 3444444,
        price: 30000,
        image: "https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703-1024x713.jpeg"
    
      },
      {
        name: "mac book",
        stock: 433333333,
        price: 40000,
        image: "https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703-1024x713.jpeg"
    
      },
      {
        name: "mac book",
        stock: 433333333,
        price: 40000,
        image: "https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703-1024x713.jpeg"
    
      },{
        name: "mac book",
        stock: 433333333,
        price: 40000,
        image: "https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703-1024x713.jpeg"
    
      },
      {
        name: "mac book",
        stock: 433333333,
        price: 40000,
        image: "https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703-1024x713.jpeg"
    
      },
      {
        name: "mac book",
        stock: 433333333,
        price: 40000,
        image: "https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703-1024x713.jpeg"
    
      },
      {
        name: "mac book",
        stock: 433333333,
        price: 40000,
        image: "https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703-1024x713.jpeg"
    
      }

    ];
    this.dataSource.data = dummy;
  }

  search(value: string){
    let filterValue = "";
    
    this.dataSource.filter = value;
  }

  clearSearch(){
    this.textSearch = "";
    event: Event;
    
    this.search("");
  }

}
