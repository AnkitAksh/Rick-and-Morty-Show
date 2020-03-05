import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CharactersService } from 'src/app/home/services/characters.service';

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.css']
})
export class OriginComponent implements OnInit {

  genderForm: FormGroup;
  constructor(private filter: CharactersService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.genderForm = this.formBuilder.group({
      male: [false],
      female: [false]
    });
  }


}
