import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { MarketingComponent } from './services/marketing/marketing.component';
import { WebdevelopmentComponent } from './services/webdevelopment/webdevelopment.component';
import { BrandingComponent } from './services/branding/branding.component';
import { OtherservicesComponent } from './services/otherservices/otherservices.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { SeoComponent } from './blogs/seo/seo.component';
import { WebdevelopementComponent } from './blogs/webdevelopement/webdevelopement.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Service', component: ServiceComponent },
  { path: 'Blogs', component: BlogsComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Marketing', component: MarketingComponent, title: 'Social Media Marketing Pune – SMM Services | FourthDM' },
  { path: 'Website', component: WebdevelopmentComponent, title: 'Web Development Agency Pune – Custom Websites & UI/UX | FourthDM' },
  { path: 'Branding', component: BrandingComponent, title: 'Branding Expert Agency Pune – Corporate Identity & Brand Design | FourthDM' },
  { path: 'Other', component: OtherservicesComponent, title: 'Branding Expert Agency Pune – Corporate Identity & Brand Design | FourthDM' },
  { path: 'Seo', component: SeoComponent, title: 'What is SEO & How it works, A Beginner’s Guide to Search Engine Optimization' },
  { path: 'Web_Development', component: WebdevelopementComponent, title: ' Web Development in 2025: A FourthDM Guide' },
  { path: '**', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
