import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/core/shared/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [ ReactiveFormsModule, CommonModule],
})
export class LoginComponent {
 loading = false;
  error = '';

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  submit() {
    if (this.form.invalid) return;

    this.loading = true;
    this.error = '';

    this.usuarioService.login(this.form.value).subscribe({
      next: (res:any) => {
        this.loading = false;
        console.log('Login correcto', res);
      },
      error: (err:any) => {
        this.loading = false;
        this.error = err.error.message || 'Error al iniciar sesión';
      }
    });
  }
}
