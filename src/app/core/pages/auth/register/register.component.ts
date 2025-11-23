import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Area } from 'src/app/core/shared/enums/area.enum';
import { UsuarioService } from 'src/app/core/shared/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class RegisterComponent {
  loading = false;
  message = '';
  error = '';

  roles = ['tecnico', 'callcenter', 'administrador'];
  areas = Object.values(Area);

  form = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    rol: ['', Validators.required],
    area: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  submit() {
    if (this.form.invalid) return;

    this.loading = true;
    this.error = '';
    this.message = '';
    debugger
    this.usuarioService.register(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.message = 'Usuario creado correctamente';
        setTimeout(() => {
          this.router.navigate(['singin']);
        }, 1000);
      },
      error: (err: any) => {
        this.loading = false;
        this.error = err.error.message || 'Error al registrar usuario';
      }
    });
  }
}
