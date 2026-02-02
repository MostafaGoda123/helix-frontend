import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit, OnDestroy {

  currentPath: string = '';
  private routerSub!: Subscription;
  openLinks: boolean = false;

  Links = [
    { name: 'Dashboard', path: '/dashboard', icon: 'Dashboard.png' },
    { name: 'Lab Tests', path: '/lab-tests', icon: 'labTests.png' },
    { name: 'Radiology', path: '/radiology', icon: 'radiology-outline.png' },
    { name: 'Diagnoses', path: '/diagnoses', icon: 'reciept.png' },
    { name: 'Doctor Notes', path: '/doctor-notes', icon: 'doctor.png' },
    { name: 'Medication History', path: '/medications', icon: 'medicine-outline.png' },
    { name: 'Uploaded Documents', icon: 'files.png' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentPath = this.router.url;
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentPath = event.urlAfterRedirects;
        console.log(this.currentPath);
      });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  // ngOnInit() {
  //   this.checkScreenSize();
  // }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 768) {
      this.openLinks = false;
    } else {
      this.openLinks = false;
    }
  }

}
