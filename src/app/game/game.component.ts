import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  game: any[];

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.db.collection('game').valueChanges().subscribe((game: any) => this.game = game);

  }

}
