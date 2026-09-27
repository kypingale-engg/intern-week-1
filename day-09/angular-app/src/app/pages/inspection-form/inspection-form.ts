
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Api } from '../../services/api';
import { Facility } from '../../models/facility';

@Component({
  selector: 'app-inspection-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './inspection-form.html',
  styleUrl: './inspection-form.css'
})
export class InspectionForm implements OnInit {

  inspectionForm: FormGroup;
  facilities: Facility[] = [];

  constructor(
    private fb: FormBuilder,
    private api: Api
  ) {
    this.inspectionForm = this.fb.group({
      facility_id: ['', Validators.required],

      employee_id: [
        '',
        [
          Validators.required,
          Validators.min(1)
        ]
      ],

      inspection_date: [
        '',
        Validators.required
      ],

      status: [
        '',
        Validators.required
      ],

      remarks: [
        '',
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ]
    });
  }

  ngOnInit(): void {
    this.loadFacilities();
  }

  loadFacilities(): void {
    this.api.getFacilities().subscribe({
      next: (data) => {
        this.facilities = data;
      },

      error: (error) => {
        console.error(
          'Error loading facilities:',
          error
        );
      }
    });
  }

  submitInspection(): void {

    if (this.inspectionForm.invalid) {

      this.inspectionForm.markAllAsTouched();

      return;
    }

    this.api.addInspection(
      this.inspectionForm.value
    ).subscribe({

      next: (data) => {

        console.log(
          'Inspection saved successfully:',
          data
        );

        alert(
          'Inspection saved successfully!'
        );

        this.inspectionForm.reset();
      },

      error: (error) => {

        console.error(
          'Error saving inspection:',
          error
        );

        alert(
          'Failed to save inspection.'
        );
      }
    });
  }
}

