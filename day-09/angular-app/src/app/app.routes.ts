import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { InspectionHistory } from './pages/inspection-history/inspection-history';
import { InspectionForm } from './pages/inspection-form/inspection-form';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'inspection-history',
    component: InspectionHistory
  },
  {
    path: 'inspection-form',
    component: InspectionForm
  }
];