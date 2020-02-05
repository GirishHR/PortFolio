import { Component, OnInit, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewChecked, OnInit
{
  isLoading: boolean = true;
  constructor(private changeDetector: ChangeDetectorRef)
  {
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
