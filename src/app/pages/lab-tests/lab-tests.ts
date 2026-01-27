import { Component } from '@angular/core';
import { Header } from "../../core/layout/header/header";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lab-tests',
  imports: [Header , CommonModule],
  templateUrl: './lab-tests.html',
  styleUrl: './lab-tests.css',
})
export class LabTests {

  labTestsCategories = [
    { name: 'All', active: true },
    { name: 'Blood Tests', active: false },
    { name: 'Hormones', active: false },
    { name: 'Urine Tests', active: false },
    { name: 'Vitamins', active: false },
    { name: 'Imaging-related labs', active: false },
  ];

  allLabTests = [
    { title: 'Complete Blood Count', category: 'Blood Tests', time: '2026-01-27', status: 'completed' },
    { title: 'Blood Sugar', category: 'Blood Tests', time: '2026-01-26', status: 'pending' },
    { title: 'Thyroid Panel', category: 'Hormones', time: '2026-01-25', status: 'processing' },
    { title: 'Cortisol Test', category: 'Hormones', time: '2026-01-24', status: 'completed' },
    { title: 'Urinalysis', category: 'Urine Tests', time: '2026-01-23', status: 'pending' },
    { title: 'Urine Culture', category: 'Urine Tests', time: '2026-01-22', status: 'processing' },
    { title: 'Vitamin D', category: 'Vitamins', time: '2026-01-21', status: 'completed' },
    { title: 'Vitamin B12', category: 'Vitamins', time: '2026-01-20', status: 'pending' },
    { title: 'X-ray Chest', category: 'Imaging-related labs', time: '2026-01-19', status: 'processing' },
    { title: 'CT Scan Abdomen', category: 'Imaging-related labs', time: '2026-01-18', status: 'completed' },
    { title: 'Iron Test', category: 'Blood Tests', time: '2026-01-17', status: 'pending' },
    { title: 'FSH/LH', category: 'Hormones', time: '2026-01-16', status: 'processing' },
    { title: 'Urine Protein', category: 'Urine Tests', time: '2026-01-15', status: 'completed' },
    { title: 'Vitamin C', category: 'Vitamins', time: '2026-01-14', status: 'pending' },
    { title: 'MRI Brain', category: 'Imaging-related labs', time: '2026-01-13', status: 'processing' },
  ];

  activeLabTests = this.allLabTests;

  handleCategories(selectedCategory: string) {
    this.labTestsCategories.map( c => c.name === selectedCategory ? c.active = true : c.active = false );
    if (selectedCategory == "All") {
      this.activeLabTests = this.allLabTests;
    }else {
      this.activeLabTests = this.allLabTests.filter( labTest => labTest.category === selectedCategory );
    }
  }

}
