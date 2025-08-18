import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './game-info.html',
  styleUrl: './game-info.scss',
})
export class GameInfo {}
