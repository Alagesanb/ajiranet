import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  public ajiraForm: FormGroup;
  public currentData: any;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.ajiraForm = this.formBuilder.group({
      type: [''],
      name: [''],
    });
  }

  ajiraFormDevice(formValues){
    console.log(formValues);
    //Local storage save devices
    if(formValues.type !== '' && formValues.name !== ''){
      var currentInfo = JSON.parse(window.localStorage.getItem('devices')) || [];
     var result = currentInfo.filter(t=>t.type === formValues.type);
     var tname = currentInfo.filter(t=>t.name === formValues.name);
     if(!result.length && !tname.length){
      currentInfo.push(formValues);
     }else{
      console.log(formValues);
     }
      window.localStorage.setItem('devices', JSON.stringify(currentInfo));
    }
  }

}
