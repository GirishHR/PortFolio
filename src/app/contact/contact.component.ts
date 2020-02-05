import { Component, OnInit, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewChecked, OnInit
{
  isLoading: boolean = true;
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit()
  {
  }
  ngAfterViewChecked(): void
  {
    this.changeDetector.detectChanges();
  }


  ngAfterViewInit(): void
  {

    this.isLoading = false;

  }

}
