import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { DashboardLayout } from './core/layout/dashboard-layout/dashboard-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { LabTests } from './pages/lab-tests/lab-tests';
import { TestDetails } from './pages/test-details/test-details';
import { Radiology } from './pages/radiology/radiology';
import { RadiologyDetails } from './pages/radiology-details/radiology-details';
import { Diagnoses } from './pages/diagnoses/diagnoses';
import { DoctorNotes } from './pages/doctor-notes/doctor-notes';
import { Medications } from './pages/medications/medications';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Landing },

  { path: 'login', component: Login },
  { path: 'register', component: Register },

  {
    path: '',
    component: DashboardLayout,
    canActivate: [authGuard],   // 👈 هنا الحماية
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'lab-tests', component: LabTests },
      { path: 'lab-tests/:id', component: TestDetails },
      { path: 'radiology', component: Radiology },
      { path: 'radiology/:id', component: RadiologyDetails },
      { path: 'diagnoses', component: Diagnoses },
      { path: 'doctor-notes', component: DoctorNotes },
      { path: 'medications', component: Medications },
    ]
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];
