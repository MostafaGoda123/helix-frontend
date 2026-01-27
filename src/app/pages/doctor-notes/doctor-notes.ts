import { Component } from '@angular/core';
import { Header } from "../../core/layout/header/header";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-notes',
  imports: [Header , CommonModule],
  templateUrl: './doctor-notes.html',
  styleUrl: './doctor-notes.css',
})
export class DoctorNotes {

    radiologyCategories = [
    { name: 'All', active: true },
    { name: 'Recent', active: false },
    { name: 'By Doctor', active: false },
    { name: 'By Date', active: false },
  ];

  recentNotes = [
    {
      title: 'Allergy Consultation',
      category: 'Recent',
      doctor: 'Dr.xxxxxxx',
      time: '15-09-2023'
    },
    {
      title: 'Blood Test Review',
      category: 'By Doctor',
      doctor: 'Dr.xxxxxxx',
      time: '20-07-2023'
    },
    {
      title: 'Routine Check-Up',
      category: 'By Date',
      doctor: 'Dr.xxxxxxx',
      time: '20-07-2023'
    }
  ];

  olderNotes = [
    {
      title: 'Post-Surgery Follow-UP',
      category: 'Recent',
      doctor: 'Dr.xxxxxxx',
      time: '20-07-2023'
    },
    {
      title: 'Routine Check-Up',
      category: 'By Date',
      doctor: 'Dr.xxxxxxx',
      time: '22-04-2023'
    },
    {
      title: 'Routine Check-Up',
      category: 'By Doctor',
      doctor: 'Dr.xxxxxxx',
      time: '10-05-2023'
    }
  ];


    activeRecentNotes = this.recentNotes;
    activeOlderNotes = this.olderNotes;

  handleCategories(selectedCategory: string) {
    this.radiologyCategories.map( c => c.name === selectedCategory ? c.active = true : c.active = false );
    if (selectedCategory == "All") {
    this.activeRecentNotes = this.recentNotes;
    this.activeOlderNotes = this.olderNotes;
    }else {
      this.activeRecentNotes = this.recentNotes.filter( labTest => labTest.category === selectedCategory );
      this.activeOlderNotes = this.olderNotes.filter( labTest => labTest.category === selectedCategory );
    }
  }

}
