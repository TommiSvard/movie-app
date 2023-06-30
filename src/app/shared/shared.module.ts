import { NgModule } from "@angular/core";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
    imports: [ReactiveFormsModule],
})
export class SharedModule {}