import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
// import { RecipeModule } from './recipes/recipe/recipe.module';
import { SharedModule } from './shared/shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth/auth.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    // RecipeModule,
    ShoppingListModule,
    AuthModule,
    AppRoutingModule,
    HttpModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
