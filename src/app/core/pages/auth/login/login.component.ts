import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/core/shared/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class LoginComponent implements OnInit {
  loading = false;
  error = '';

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false]
  });

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    const saved = localStorage.getItem('loginData');

    if (saved) {
      const { email, password } = JSON.parse(saved);

      this.form.patchValue({
        email,
        password,
        remember: true
      });
    }
  }

  submit() {
    if (this.form.invalid) return;

    this.loading = true;
    this.error = '';

    this.usuarioService.login(this.form.value).subscribe({
      next: (res: any) => {

        if (this.form.value.remember) {
          localStorage.setItem(
            'loginData',
            JSON.stringify({
              email: this.form.value.email,
              password: this.form.value.password
            })
          );
        } else {
          localStorage.removeItem('loginData');
        }

        this.loading = false;
        console.log('Login correcto', res);
      },
      error: (err: any) => {
        this.loading = false;
        this.error = err.error.message || 'Error al iniciar sesión';
      }
    });
  }
}
