
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Api } from '../../services/api';
import { Inspection } from '../../models/inspection';
import { Facility } from '../../models/facility';

@Component({
  selector: 'app-inspection-history',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './inspection-history.html',
  styleUrl: './inspection-history.css'
})
export class InspectionHistory implements OnInit {

  inspections: Inspection[] = [];
  facilities: Facility[] = [];

  searchText = '';
  selectedStatus = 'All';

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.loadFacilities();
    this.loadInspections();
  }

  loadFacilities(): void {
    this.api.getFacilities().subscribe({
      next: (data) => {
        this.facilities = data;
      },
      error: (error) => {
        console.error('Error loading facilities:', error);
      }
    });
  }

  loadInspections(): void {
    this.api.getInspections().subscribe({
      next: (data) => {
        this.inspections = data;
      },
      error: (error) => {
        console.error('Error loading inspection history:', error);
      }
    });
  }

  getFacilityName(facilityId: number): string {
    const facility = this.facilities.find(
      facility => Number(facility.id) === Number(facilityId)
    );

    return facility ? facility.name : 'Unknown Facility';
  }

  get filteredInspections(): Inspection[] {

    const search = this.searchText.trim().toLowerCase();

    return this.inspections.filter(inspection => {

      const facilityName = this
        .getFacilityName(inspection.facility_id)
        .toLowerCase();

      const remarks = (inspection.remarks || '').toLowerCase();

      const status = (inspection.status || '').toLowerCase();

      const matchesSearch =
        search === '' ||
        facilityName.includes(search) ||
        remarks.includes(search) ||
        status.includes(search);

      const matchesStatus =
        this.selectedStatus === 'All' ||
        inspection.status === this.selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }
}

