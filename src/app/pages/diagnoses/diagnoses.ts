import { Component } from '@angular/core';
import { Header } from "../../core/layout/header/header";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diagnoses',
  imports: [Header , CommonModule],
  templateUrl: './diagnoses.html',
  styleUrl: './diagnoses.css',
})
export class Diagnoses {

  radiologyCategories = [
    { name: 'All', active: true },
    { name: 'X-ray', active: false },
    { name: 'CT Scan', active: false },
    { name: 'MRI', active: false },
    { name: 'Ultrasound', active: false },
    { name: 'Other Imaging', active: false },
  ];

  recentDiagnoses = [
    {
      patient: 'Maryam',
      title: 'Hypertension',
      category: 'X-ray',
      description: 'High blood pressure, chronic condition.',
      status: 'Active',
      diagnosed: '15-09-2023'
    },
    {
      patient: 'Maryam',
      title: 'Acute Bronchitis',
      category: 'CT Scan',
      description: 'Chronic metabolic disorder.',
      status: 'Resolved',
      diagnosed: '20-07-2023'
    },
    {
      patient: 'Maryam',
      title: 'Asthma',
      category: 'MRI',
      description: 'Chronic metabolic disorder.',
      status: 'Critical',
      diagnosed: '20-07-2023'
    }
  ];

  olderDiagnoses = [
    {
      patient: 'Maryam',
      title: 'Type 2 Diabetes',
      category: 'X-ray',
      description: 'Chronic metabolic disorder.',
      status: 'Active',
      diagnosed: '20-07-2023'
    },
    {
      patient: 'Maryam',
      title: 'Seasonal Allergies',
      category: 'MRI',
      description: 'Allergic rhinitis',
      status: 'Resolved',
      diagnosed: '22-04-2023'
    },
    {
      patient: 'Maryam',
      title: 'Pneumonia',
      category: 'CT Scan',
      description: 'Lung infection, required hospitalization.',
      status: 'Critical',
      diagnosed: '10-05-2023'
    }
  ];


    activeRecentDiagnoses = this.recentDiagnoses;
    activeOlderDiagnoses = this.olderDiagnoses;

  handleCategories(selectedCategory: string) {
    this.radiologyCategories.map( c => c.name === selectedCategory ? c.active = true : c.active = false );
    if (selectedCategory == "All") {
    this.activeRecentDiagnoses = this.recentDiagnoses;
    this.activeOlderDiagnoses = this.olderDiagnoses;
    }else {
      this.activeRecentDiagnoses = this.recentDiagnoses.filter( labTest => labTest.category === selectedCategory );
      this.activeOlderDiagnoses = this.olderDiagnoses.filter( labTest => labTest.category === selectedCategory );
    }
  }

}
