import {Component, Inject, Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private readonly snackBar: MatSnackBar,
              ) {
  }
  showNoficatiton() {
    this.snackBar.open('messenger send', 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

//   success(message: string) {
//     this.openSnackBar(message, '', 'success-snackbar');
//   }
//   error(message: string) {
//     this.openSnackBar(message, '', 'error-snackbar');
//   }
//   confirmation(
//     message: string,
//     okCallback: () => void,
//     title = 'Are you sure?',
//     cancelCallback: () => any = () => { }
//   ) {
//     const dialogRef = this.dialog.open(ConfirmationDialog, {
//       width: '250px',
//       data: { message: message, title: title }
//     });
//
//     dialogRef.afterClosed().subscribe(result => {
//       if (result && okCallback) {
//         okCallback();
//       }
//       if (!result && cancelCallback) {
//         cancelCallback();
//       }
//     });
//   }
//   alert(message: string, title = 'Notice', okCallback: () => void = () => { }) {
//     const dialogRef = this.dialog.open(AlertDialog, {
//       width: '250px',
//       data: { message: message, title: title },
//       disableClose: true
//     });
//
//     dialogRef.afterClosed().subscribe(result => {
//       if (result && okCallback) {
//         okCallback();
//       }
//     });
//   }
//   openSnackBar(
//     message: string,
//     action: string,
//     className = '',
//     duration = 1000
//   ) {
//     this.snackBar.open(message, action, {
//       duration: duration,
//       panelClass: [className]
//     });
//   }
// }
// export interface DialogData {
//   message: string;
//   title: string;
//
// }
}
