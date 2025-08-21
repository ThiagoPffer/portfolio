import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckIcon, GithubIcon, HexagonIcon, LinkedinIcon, LucideAngularModule, MailIcon, PhoneIcon } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    LucideAngularModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  MailIcon = MailIcon;
  LinkedinIcon = LinkedinIcon;
  GithubIcon = GithubIcon;
  PhoneIcon = PhoneIcon;
  LoadingIcon = HexagonIcon;
  CheckIcon = CheckIcon;
  
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  success = false;
  error = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.error = false;
    this.success = false;
    if (this.contactForm.invalid) return;

    this.loading = true;
    const url = 'https://script.google.com/macros/s/AKfycbwVkDhHtKnUR5FX1fNL0RgT_vYP69VtwIC6W0obkPRmr0uhKUIYwsnfkzJb5K-Om06CtA/exec';
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams(this.contactForm.value).toString();

    this.http.post(url, body, { headers, responseType: 'text' }).subscribe({
      next: () => {
        this.success = true;
        this.contactForm.reset();
        this.submitted = false;
      },
      error: () => {
        this.error = true;
      }
    }).add(() => this.loading = false);
  }
}
