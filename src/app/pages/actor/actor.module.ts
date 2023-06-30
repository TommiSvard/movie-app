import { SharedModule } from "src/app/shared/shared.module";
import { NgModule } from "@angular/core";
import { ActorComponent } from "./actor.component";
import { ActorRoutingModule } from "./actor-routing.module";

@NgModule({
  declarations: [
    ActorComponent
  ],
  exports: [
    ActorComponent
    ],
    imports: [ActorRoutingModule, SharedModule],
  providers: [],
})
export class ActorModule {}