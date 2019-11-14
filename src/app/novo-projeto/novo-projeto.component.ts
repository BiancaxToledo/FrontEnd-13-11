import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
import { ProjetoApiService } from '../service/projeto-api.service';
import { Projeto } from '../model/projeto';
@Component({
  selector: 'has-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css',]
})
export class NovoProjetoComponent implements OnInit {

  formProjeto: FormGroup;
  projetoForm: any;

  constructor(private formBuilder : FormBuilder, private service:ProjetoApiService) { }

  ngOnInit() {
             }

             onSalvar() {
              let projeto : Projeto = this.projetoForm.value;
              this.formProjeto = this.formBuilder.group({})
              this.service.createProjeto(projeto)
              .subscribe(data => console.log(data),
              error => console.log(error));

              }           


}
