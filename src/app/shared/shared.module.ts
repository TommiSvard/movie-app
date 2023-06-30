import { NgModule } from "@angular/core";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { HeaderComponent } from "./components/header/header.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [SearchBarComponent, HeaderComponent],
  exports: [SearchBarComponent, HeaderComponent],
    imports: [ReactiveFormsModule],
})
export class SharedModule { }