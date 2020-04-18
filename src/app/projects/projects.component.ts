import { Component, OnInit, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewChecked, OnInit
{
  isLoading: boolean = true;
  constructor(private changeDetector: ChangeDetectorRef, private titleService: Title, private meta: Meta)
  {
    this.titleService.setTitle('Projects');
    // this.meta.addTag({ name: 'description', content: 'The projects that I completed, apart from the company and are publicly available.' });
  }
  ngOnInit()
  {
  }
  ngAfterViewChecked(): void
  {
    this.changeDetector.detectChanges();
  }


  ngAfterViewInit(): void
  {
    setTimeout(() =>
    {
      this.isLoading = false;
    }, 1000);

  }



}
