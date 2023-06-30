

import { NgModule } from "@angular/core";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [SearchBarComponent, HeaderComponent],
  exports: [SearchBarComponent, HeaderComponent]
})
export class SharedModule { }