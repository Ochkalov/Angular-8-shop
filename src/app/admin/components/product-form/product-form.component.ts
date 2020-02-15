import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../../products/services/products.service';
import {filter, pluck} from 'rxjs/operators';
import {IProductModel, ProductModel} from '../../../products/models/product.model';
import {CanComponentDeactivate} from '../../../core/interfaces/can-component-deactivate';
import {Observable} from 'rxjs';
import {DialogService} from '../../../core/services/dialog.service';
import {CanDeactivateGuard} from '../../../core/guards/can-deactivate.guard';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.less']
})
export class ProductFormComponent implements OnInit, CanDeactivateGuard {
  productForm: FormGroup;
  isCreatingMode = true;

  private productId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private dialogService: DialogService
  ) {

    this.productForm = this.fb.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      isAvailable: [true]
    });
  }

  ngOnInit() {

    this.route.data
      .pipe(
        pluck('product'),
        filter(Boolean)
      )
      .subscribe((product: ProductModel) => {
        this.productId = product.id;

        this.productForm.patchValue(product);
        this.isCreatingMode = false;
      });
  }

  canDeactivate(component: CanComponentDeactivate): boolean | Observable<boolean> {
    if (!this.productForm.touched) {
      return true;
    }

    return this.dialogService.confirm('New product data will not be saved. Are you sure?');
  }

  submit(value: IProductModel): void {
    this.isCreatingMode
      ? this.productsService.addProduct(value)
      : this.productsService.editProduct({...value, id: this.productId});
    this.productForm.reset();

    this.router.navigate(['./admin/products']);
  }

}
