import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';

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
  constructor(private changeDetector: ChangeDetectorRef)
  {
  }

  ngOnInit()
  {

  }
  ngAfterViewInit(): void
  {

    this.isLoading = false;
  }
}
