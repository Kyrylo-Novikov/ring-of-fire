import {
  ChangeDetectionStrategy,
  inject,
  Component,
  model,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog-add-player',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    // MAT_DIALOG_DATA,
    // MatDialog,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    // MatDialogRef,
    MatDialogTitle,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './dialog-add-player.html',
  styleUrl: './dialog-add-player.scss',
})
export class DialogAddPlayer {
  name: string = '';
  readonly dialog = inject(MatDialog);
  readonly dialogRef = inject(MatDialogRef<DialogAddPlayer>);
  onNoClick() {
    this.dialogRef.close();
  }
}
