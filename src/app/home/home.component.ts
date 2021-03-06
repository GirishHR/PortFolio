import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewChecked, OnInit
{
  isLoading: boolean = true;
  ngAfterViewChecked(): void
  {
    this.changeDetector.detectChanges();
  }
  constructor(private changeDetector: ChangeDetectorRef, private titleService: Title, private meta: Meta)
  {
    this.titleService.setTitle('Profile');
    this.meta.addTag({ name: 'description', content: 'View Girish Rangaraju\'s profile to know about the projects he did and the work experience of him.' });
  }

  ngOnInit()
  {

  }
  ngAfterViewInit(): void
  {

    this.isLoading = false;
  }
}
