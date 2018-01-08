import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sintonía';
  arrPoema = [];
  form: FormGroup;

  constructor(private gameService: GameService,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      texto: ['', Validators.required]
    });
  }

  addText() {
    if (this.form.valid) {
      const text = this.form.get('texto');
      this.gameService.setGame(text.value).subscribe(res => {
        this.arrPoema = null;
        text.reset('');
      });
    }
  }

  showText() {
    this.gameService.getGame().subscribe(res => {
      this.arrPoema = res;
    });
  }

}
