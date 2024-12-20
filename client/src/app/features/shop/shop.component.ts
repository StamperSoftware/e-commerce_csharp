import { Component, inject, OnInit } from '@angular/core';
import { ShopService } from "../../core/services/shop.service";
import { Product } from "../../shared/models/products";
import { ProductItemComponent } from "./product-item/product-item.component";
import { FiltersDialogComponent } from "./filters-dialog/filters-dialog.component";
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModal,
  NgbPagination
} from '@ng-bootstrap/ng-bootstrap';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { ShopParams } from "../../shared/models/shopParams";
import { Pagination } from "../../shared/models/pagination";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    ProductItemComponent,
    FiltersDialogComponent,
    FaIconComponent,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem,
    NgbPagination,
    FormsModule
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  private shopService = inject(ShopService);
  private modalService = inject(NgbModal);
  protected readonly filterIcon = faFilter;
  protected readonly searchIcon = faSearch;
  
  products?:Pagination<Product>;
  sortOptions = [
    {name:"Alphabetical", value:"name"},
    {name:"Price low - high", value:"priceAsc"},
    {name:"Price high - low", value:"priceDesc"},
  ]
  
  shopParams = new ShopParams();
  
  ngOnInit(): void {
    this.initializeShop();
  }
  
  initializeShop(){
    this.shopService.getBrands();
    this.shopService.getTypes();
    
    this.getProducts();
  }
  
  setSort(sort:string){
    this.shopParams.pageNumber = 1;
    this.shopParams.sort = sort;
    this.getProducts(); 
  }
  
  getProducts() {
    this.shopService.getProducts(this.shopParams).subscribe({
      next : response => this.products = response,
      error: () => console.log('error'),
    });
  }
  
  setPageSize(pageSize:number){
    this.shopParams.pageSize = pageSize;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  
  onSearchChange() {
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  
  open(){
    const dialogRef = this.modalService.open(FiltersDialogComponent);
    
    dialogRef.componentInstance.selectedBrands = this.shopParams.brands;
    dialogRef.componentInstance.selectedTypes = this.shopParams.types;
    
    dialogRef.closed.subscribe(
        ({selectedBrands, selectedTypes}) => {
          this.shopParams = {...this.shopParams, pageNumber:1, types:selectedTypes, brands:selectedBrands}
          this.getProducts();
        }
    )
  }
}
