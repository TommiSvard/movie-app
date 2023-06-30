import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  public searchbarForm = this.fb.group({
    searchbar: ['']
  });
  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.route.navigate(['/actor']);
    console.log(this.searchbarForm.value);
  }
}
