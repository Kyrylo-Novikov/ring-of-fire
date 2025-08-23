import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './game-info.html',
  styleUrl: './game-info.scss',
})
export class GameInfo implements OnInit, OnChanges {
  cardAction = [
    {
      title: 'Waterfall',
      description:
        'Alle trinken gleichzeitig. Der Spieler mit dem Ass hört zuerst auf, die anderen in Reihenfolge danach.',
    },
    { title: 'You', description: 'Du bestimmst jemanden, der trinken muss.' },
    { title: 'Me', description: 'Du selbst trinkst einen Schluck.' },
    {
      title: 'Floor',
      description: 'Alle müssen den Boden berühren – der Letzte trinkt.',
    },
    {
      title: 'Thumbmaster',
      description:
        'Du kannst jederzeit deinen Daumen auf den Tisch legen. Wer als Letzter reagiert, trinkt.',
    },
    { title: 'For Chicks', description: 'Alle Frauen trinken.' },
    {
      title: 'Heaven',
      description: 'Zeig in den Himmel – wer’s verpennt, trinkt.',
    },
    {
      title: 'Mate',
      description:
        'Wähle einen Mitspieler – ab jetzt müsst ihr immer gemeinsam trinken.',
    },
    {
      title: 'Rhyme',
      description:
        ' Sag ein Wort. Im Uhrzeigersinn muss jeder einen Reim sagen. Wer scheitert oder doppelt, trinkt.',
    },
    { title: 'Men', description: 'Alle Männer trinken.' },
    {
      title: 'New Rule',
      description:
        'Erfinde eine Regel, die ab sofort gilt. Beispiel: „Nur mit links trinken“ oder „Niemand darf fluchen“.',
    },
    {
      title: 'Never Have I Ever ',
      description:
        'Starte eine Runde „Ich hab noch nie…“ – wer etwas doch getan hat, trinkt.',
    },
    {
      title: 'Kingscup',
      description:
        'Erster bis dritter König → schütte einen Schluck deines Drinks in den Kingscup. Vierter König → Du musst den gesamten Kingscup exen.',
    },
  ];

  title: string = '';
  description: string = '';
  @Input() card: string = '';

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.card) {
      console.log('current card:', this.card);
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}
