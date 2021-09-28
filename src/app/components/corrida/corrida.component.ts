import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Corrida } from 'src/app/entities/corrida';
import { CorridaService } from 'src/app/services/corrida.service';


@Component({
  selector: 'app-corrida',
  templateUrl: './corrida.component.html',
  styleUrls: ['./corrida.component.css']
})
export class CorridaComponent implements OnInit {

  corridas:Corrida[] = []

  boolForm:boolean = false
  submitted: boolean = false

  form: FormGroup

  corrida: Corrida = {
    descricao: ''
  }
  constructor(private formBuilder: FormBuilder,private corridaService: CorridaService) { 
    this.form = this.formBuilder.group(
      {
        descricao: ['', [
          Validators.required,
          Validators.minLength(3),
        ]]
      }
    )
  }

  ngOnInit(): void {
    this.getCorridas()
  }

  getCorridas():void{
    this.corridaService.getAll().subscribe(
      data => {this.corridas = data},
      error => console.log("Erro ao listar corrida", error)
    )
  }

  get f():{[key: string]:AbstractControl}{
    return this.form.controls
  }

  onSubmit(): void {
    this.submitted = true
    if(this.form.invalid){
      return
    }
    this.corrida = this.form.value
    console.log(JSON.stringify(this.form.value, null, 2))
    this.saveCorrida()
  }

  saveCorrida(): void {
    this.corridaService.create(this.corrida)
      .subscribe(
        response => {
          console.log(response)
        },
        error => {
          console.log(error)
        })
    this.getCorridas()
  }

  showHideForm():void{
    if(this.boolForm == false){
      this.boolForm = true;
    }else{
      this.boolForm = false;
    }
  }

}
