
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Api } from '../../services/api';
import { Facility } from '../../models/facility';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  facilities: Facility[] = [];
  searchText = '';

  sortBy = 'name';
  sortOrder: 'asc' | 'desc' = 'asc';

  selectedFacility: Facility | null = null;

  totalFacilities = 0;
  availableFacilities = 0;
  passedInspections = 0;
  needsRepair = 0;

  facilityError = '';
  inspectionError = '';

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.loadFacilities();
    this.loadInspections();
  }

  loadFacilities(): void {

    this.facilityError = '';

    this.api.getFacilities().subscribe({

      next: (data) => {

        this.facilities = data;

        this.totalFacilities = data.length;

        this.availableFacilities = data.filter(
          facility => facility.is_available
        ).length;

        this.needsRepair = data.filter(
          facility => facility.condition === 'Poor'
        ).length;
      },

      error: (error) => {

        console.error(
          'Error loading facilities:',
          error
        );

        this.facilityError =
          'Unable to load facilities. Please make sure the API server is running.';
      }
    });
  }

  loadInspections(): void {

    this.inspectionError = '';

    this.api.getInspections().subscribe({

      next: (data) => {

        this.passedInspections = data.filter(
          inspection => inspection.status === 'Passed'
        ).length;
      },

      error: (error) => {

        console.error(
          'Error loading inspections:',
          error
        );

        this.inspectionError =
          'Unable to load inspection data. Please try again later.';
      }
    });
  }

  get filteredFacilities(): Facility[] {

    const search = this.searchText
      .trim()
      .toLowerCase();

    return this.facilities
      .filter(facility =>
        facility.name
          .toLowerCase()
          .includes(search)
      )
      .sort((a, b) => {

        const valueA = String(
          a[this.sortBy as keyof Facility] ?? ''
        );

        const valueB = String(
          b[this.sortBy as keyof Facility] ?? ''
        );

        const comparison = valueA.localeCompare(
          valueB,
          undefined,
          {
            numeric: true,
            sensitivity: 'base'
          }
        );

        return this.sortOrder === 'asc'
          ? comparison
          : -comparison;
      });
  }

  changeSorting(field: string): void {

    if (this.sortBy === field) {

      this.sortOrder =
        this.sortOrder === 'asc'
          ? 'desc'
          : 'asc';

    } else {

      this.sortBy = field;
      this.sortOrder = 'asc';
    }
  }

  viewFacility(facility: Facility): void {
    this.selectedFacility = facility;
  }

  closeFacilityDetails(): void {
    this.selectedFacility = null;
  }
}

