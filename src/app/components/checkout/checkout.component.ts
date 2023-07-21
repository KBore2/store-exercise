import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  private fb = inject(FormBuilder);

  addressForm!: FormGroup;

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      residential: [''],
      business: [''],
      buildingNumber: [''],
      suburb: [''],
      city: [''],
      postalCode: [''],
      province: [''],
    });
  }
}
