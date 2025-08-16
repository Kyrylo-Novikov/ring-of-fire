import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCurrentInfos } from './../../models/game_model';
import { Player } from '../player/player';

@Component({
  selector: 'app-game',
  imports: [CommonModule, Player],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game implements OnInit {
  currentGame: GameCurrentInfos = new GameCurrentInfos();
  currentCard: string = '';

  pickCardAnimation = false;

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.currentGame = new GameCurrentInfos();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.currentGame.stack.pop() || '';
      this.pickCardAnimation = true;
      setTimeout(() => {
        this.currentGame.playedCards.push(this.currentCard);
        setTimeout(() => {
          this.pickCardAnimation = false;
        }, 10);
      }, 1000);
    }
  }
}
