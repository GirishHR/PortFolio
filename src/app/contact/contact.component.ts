import { Component, OnInit, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewChecked, OnInit
{
  isLoading: boolean = true;
  constructor(private changeDetector: ChangeDetectorRef, private titleService: Title, private meta: Meta)
  {
    this.titleService.setTitle('Contacts');
    // this.meta.addTag({ name: 'description', content: 'You can contact me with these media\'s that I\'m available.' });
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

    this.isLoading = false;

  }

}
