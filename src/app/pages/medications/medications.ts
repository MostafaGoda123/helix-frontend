import { Component } from '@angular/core';
import { Header } from "../../core/layout/header/header";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medications',
  imports: [Header , CommonModule],
  templateUrl: './medications.html',
  styleUrl: './medications.css',
})
export class Medications {

  medicationCategories = [
    { name: 'All', active: true },
    { name: 'Active', active: false },
    { name: 'Completed', active: false },
    { name: 'Stopped', active: false },
    { name: 'By Doctor', active: false },
  ];

  recentMedications = [
    {
      title: 'Amlodipine 10 mg',
      description: 'Blood Pressure Medication',
      status: 'Active',
      doctor: 'Dr.xxxxxxxxxx',
      time: 'Jan 2023 - present',
      frequency: 'Once daily',
      notes: 'Take after meals'
    },
    {
      title: 'Amlodipine 10 mg',
      description: 'Blood Pressure Medication',
      status: 'Completed',
      doctor: 'Dr.xxxxxxxxxx',
      time: 'Jan 2023 - present',
      frequency: 'Once daily',
      notes: 'Take after meals'
    }
  ];


  pastMedications = [
    {
      title: 'Amlodipine 10 mg',
      description: 'Blood Pressure Medication',
      status: 'Active',
      doctor: 'Dr.xxxxxxxxxx',
      time: 'Jan 2023 - present',
      frequency: 'Once daily',
      notes: 'Take after meals'
    },
    {
      title: 'Amlodipine 10 mg',
      description: 'Blood Pressure Medication',
      status: 'Stopped',
      doctor: 'Dr.xxxxxxxxxx',
      time: 'Jan 2023 - present',
      frequency: 'Once daily',
      notes: 'Take after meals'
    }
  ];


  activeRecentMedications = this.recentMedications;
  activePastMedications = this.pastMedications;

  handleCategories(selectedCategory: string) {
    this.medicationCategories.map(
      c => c.name === selectedCategory ? c.active = true : c.active = false
    );

    if (selectedCategory === 'All') {
      this.activeRecentMedications = this.recentMedications;
      this.activePastMedications = this.pastMedications;
    } else {
      this.activeRecentMedications = this.recentMedications.filter(
        med => med.status === selectedCategory || med.doctor === selectedCategory
      );
      this.activePastMedications = this.pastMedications.filter(
        med => med.status === selectedCategory || med.doctor === selectedCategory
      );
    }
  }

}
