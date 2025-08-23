import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCurrentInfos } from './../../models/game_model';
import { Player } from '../player/player';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogAddPlayer } from '../dialog-add-player/dialog-add-player';
import { GameInfo } from '../game-info/game-info';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    Player,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    GameInfo,
  ],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game implements OnInit {
  readonly dialog = inject(MatDialog);
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
      this.currentGame.currentPlayer++;
      this.currentGame.currentPlayer =
        this.currentGame.currentPlayer % this.currentGame.players.length;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayer);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.trim().length > 0) {
        this.currentGame.players.push(name);
      }
    });
  }
}
