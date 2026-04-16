import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ClientComponent } from './pages/client/client.component';
import { ServiceComponent } from './pages/service/service.component';
import { BrandingComponent } from './services/branding/branding.component';
import { MarketingComponent } from './services/marketing/marketing.component';
import { WebdevelopmentComponent } from './services/webdevelopment/webdevelopment.component';
import { OtherservicesComponent } from './services/otherservices/otherservices.component';
import { HttpClientModule } from '@angular/common/http';
import { SeoComponent } from './blogs/seo/seo.component';
import { WebdevelopementComponent } from './blogs/webdevelopement/webdevelopement.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BlogsComponent,
    ClientComponent,
    ServiceComponent,
    BrandingComponent,
    MarketingComponent,
    WebdevelopmentComponent,
    OtherservicesComponent,
    SeoComponent,
    WebdevelopementComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
