import { Component } from '@angular/core';
import { Header } from "../../core/layout/header/header";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radiology',
  imports: [Header , CommonModule],
  templateUrl: './radiology.html',
  styleUrl: './radiology.css',
})
export class Radiology {

  radiologyCategories = [
    { name: 'All', active: true },
    { name: 'X-ray', active: false },
    { name: 'CT Scan', active: false },
    { name: 'MRI', active: false },
    { name: 'Ultrasound', active: false },
    { name: 'Other Imaging', active: false },
  ];

  allRadiologyTests = [
    { title: 'Chest X-ray', category: 'X-ray', time: '2026-01-27', status: 'completed' },
    { title: 'Abdomen X-ray', category: 'X-ray', time: '2026-01-26', status: 'pending' },
    { title: 'CT Abdomen', category: 'CT Scan', time: '2026-01-25', status: 'processing' },
    { title: 'CT Brain', category: 'CT Scan', time: '2026-01-24', status: 'completed' },
    { title: 'MRI Brain', category: 'MRI', time: '2026-01-23', status: 'pending' },
    { title: 'MRI Spine', category: 'MRI', time: '2026-01-22', status: 'processing' },
    { title: 'Abdominal Ultrasound', category: 'Ultrasound', time: '2026-01-21', status: 'completed' },
    { title: 'Pelvic Ultrasound', category: 'Ultrasound', time: '2026-01-20', status: 'pending' },
    { title: 'Chest CT', category: 'CT Scan', time: '2026-01-19', status: 'processing' },
    { title: 'Knee X-ray', category: 'X-ray', time: '2026-01-18', status: 'completed' },
    { title: 'Hip Ultrasound', category: 'Ultrasound', time: '2026-01-17', status: 'pending' },
    { title: 'Spine MRI', category: 'MRI', time: '2026-01-16', status: 'processing' },
    { title: 'Abdomen MRI', category: 'MRI', time: '2026-01-15', status: 'completed' },
    { title: 'Pelvis X-ray', category: 'X-ray', time: '2026-01-14', status: 'pending' },
    { title: 'Brain CT', category: 'CT Scan', time: '2026-01-13', status: 'processing' },
  ];


  activeRadiologyTests = this.allRadiologyTests;

  handleCategories(selectedCategory: string) {
    this.radiologyCategories.map( c => c.name === selectedCategory ? c.active = true : c.active = false );
    if (selectedCategory == "All") {
      this.activeRadiologyTests = this.allRadiologyTests;
    }else {
      this.activeRadiologyTests = this.allRadiologyTests.filter( labTest => labTest.category === selectedCategory );
    }
  }

}
