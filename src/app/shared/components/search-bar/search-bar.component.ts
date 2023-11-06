import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounce, debounceTime, filter } from 'rxjs';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchTerm: EventEmitter<any> = new EventEmitter<any>();
  @Input() movies: any[] = [];

  public searchbarForm = this.fb.group({
    searchbar: ['']
  });
  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.searchbarForm.get('searchbar')?.valueChanges.pipe(debounceTime(500)).subscribe((value) => this.searchTerm.emit(value));
  }

  onSubmit(): void {
    console.log(this.movies)
    this.route.navigate(['/actor']);
  }
}
