import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  listaModalidad = ["Presencial", "Teletrabajo", "Mixta"];
  empleadoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private dialogRef: MatDialogRef<DialogComponent> ) {}

  ngOnInit(): void {
    this.empleadoForm = this.formBuilder.group({
      nombreEmpleado: ['', Validators.required],
      apellidosEmpleado: ['', Validators.required],
      usuarioEmpleado: ['', Validators.required],
      departamentoEmpleado: ['', Validators.required],
      fechaIngresoEmpleado: ['', Validators.required],
      modalidadEmpleado: ['', Validators.required]
    })

  }

  agregarEmpleado() {
    if (this.empleadoForm.valid) {
      this.api.postEmpleado(this.empleadoForm.value)
      .subscribe({
        next:(res)=>{
          alert("Empleado añadido satisfactoriamente");
          this.empleadoForm.reset();
          this.dialogRef.close('guardar');
        },
        error:()=> {
          alert("Error al añadir el empleado");
        }
      })
    }
  }


}
