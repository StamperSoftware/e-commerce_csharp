import { Component, inject, Input } from '@angular/core';
import { ShopService } from "../../../core/services/shop.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-filters-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filters-dialog.component.html',
  styleUrl: './filters-dialog.component.scss'
})
export class FiltersDialogComponent {
    shopService : ShopService = inject(ShopService);
    private dialogRef = inject(NgbActiveModal);
    data : any[] = [];
    @Input() selectedBrands:string[] = [];
    @Input() selectedTypes:string[] = [];
    
    addToBrands(brand :string) {
      if (!this.selectedBrands.find(b => b === brand)) {
        this.selectedBrands.push(brand)
      } else {
        this.selectedBrands = this.selectedBrands.filter(b => b !== brand)
      }
    }
    addToTypes(type :string) {
      if (!this.selectedTypes.find(t => t === type)) {
        this.selectedTypes.push(type)
      } else {
        this.selectedTypes = this.selectedTypes.filter(t => t !== type)
      }
    }
    applyFilters() {
      console.log(this.selectedTypes)
      this.dialogRef.close({
        selectedBrands:this.selectedBrands,
        selectedTypes:this.selectedTypes,
      })
    }
  
    CheckInList(entity:string) {
      return this.selectedBrands.some(b => b === entity) || this.selectedTypes.some(t => t === entity);
    }
    
}
