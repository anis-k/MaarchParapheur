import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material';
import { SignaturesContentService } from '../service/signatures.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { NotificationService } from '../service/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../service/auth.service';

@Component({
    selector: 'app-signatures',
    templateUrl: 'signatures.component.html',
    styleUrls: ['signatures.component.scss'],
    animations: [
        trigger('listAnimation', [
            transition('* => *', [ // each time the binding value changes
                query(':enter', [
                    style({ opacity: 0 }),
                    stagger(100, [
                        animate('0.5s', style({ opacity: 1 }))
                    ])
                ], { optional: true })
            ])
        ])
    ],
})
export class SignaturesComponent implements OnInit {

    inAllPage = false;
    count = 0;

    constructor(private translate: TranslateService, public http: HttpClient, public signaturesService: SignaturesContentService, private bottomSheetRef: MatBottomSheet,
        private sanitization: DomSanitizer, public notificationService: NotificationService, public authService: AuthService) {
    }

    ngOnInit() {
    }

    openSignatures() {
        this.signaturesService.showSign = true;
    }

    closeSignatures() {
        this.signaturesService.showSign = false;
    }

    openPad() {
        this.signaturesService.showPad = true;
        this.closeSignatures();
    }

    reloadSignatures() {
        this.signaturesService.signaturesList.unshift(
            {
                id: this.signaturesService.newSign.id,
                encodedSignature: this.signaturesService.newSign.encodedSignature,
                substituted: false
            }
        );
        this.signaturesService.newSign = {};
    }

    selectSignature(signature: any) {
        signature.positionX = 70;
        signature.positionY = 70;
        signature.width = 25;

        if (!this.signaturesService.signaturesContent[this.signaturesService.currentPage]) {
            this.signaturesService.signaturesContent[this.signaturesService.currentPage] = [];
        }
        this.signaturesService.signaturesContent[this.signaturesService.currentPage].push(JSON.parse(JSON.stringify(signature)));
        localStorage.setItem(this.signaturesService.mainDocumentId.toString(), JSON.stringify({'sign' : this.signaturesService.signaturesContent, 'note' : this.signaturesService.notesContent}));

        this.bottomSheetRef.dismiss();
    }

    removeSignature(signature: any, i: any) {
        const r = confirm(this.translate.instant('lang.wantDeleteSignature'));

        if (r) {
            this.http.delete('../rest/users/' + this.authService.user.id + '/signatures/' + signature.id)
                .subscribe(() => {
                    this.signaturesService.signaturesList.splice(i, 1);
                    this.notificationService.success('lang.signatureDeleted');
                    this.bottomSheetRef.dismiss();
                    const config: MatBottomSheetConfig = {
                        disableClose: false,
                        direction: 'ltr'
                    };
                    this.bottomSheetRef.open(SignaturesComponent, config);
                }, (err: any) => {
                    this.notificationService.error(err.error.errors);
                });
        }
    }

    toggleAllPage() {
        this.inAllPage = !this.inAllPage;
    }

    tapEvent(signature: any, i: any, mode: string) {
        this.count++;
        if (mode === '') {
            $('[class*=remove_icon_]').hide();
            $('.remove_icon_' + i).show();
        } else {
            $('[class*=remove_icon_]').hide();
        }

        setTimeout(() => {
            if (this.count === 1) {
                this.count = 0;
            } else if (this.count > 1) {
                this.count = 0;
                this.selectSignature(signature);
            }
        }, 250);
    }

    handleFileInput(files: FileList) {
        const fileToUpload = files.item(0);

        if (fileToUpload.size <= 2000000) {
            if (['image/png', 'image/jpg', 'image/jpeg', 'image/gif'].indexOf(fileToUpload.type) !== -1) {
                const myReader: FileReader = new FileReader();
                myReader.onloadend = (e) => {

                    const newEncodedSign = myReader.result.toString().replace('data:' + fileToUpload.type + ';base64,', '');
                    localStorage.setItem('signature', JSON.stringify(newEncodedSign));

                    // Save signature in BDD
                    const newSign = {
                        'id': 0,
                        'encodedSignature': newEncodedSign,
                        'format': 'png'
                    };
                    this.http.post('../rest/users/' + this.authService.user.id + '/signatures', newSign)
                    .subscribe((data: any) => {
                        newSign.id = data.signatureId;
                        this.signaturesService.newSign = newSign;
                        this.reloadSignatures();
                        this.notificationService.success('lang.signatureRegistered');
                        this.bottomSheetRef.dismiss();
                        const config: MatBottomSheetConfig = {
                            disableClose: false,
                            direction: 'ltr'
                        };
                        this.bottomSheetRef.open(SignaturesComponent, config);
                    });
                };
                myReader.readAsDataURL(fileToUpload);
            } else {
                this.notificationService.error('lang.notAnImage');
            }
        } else {
            this.notificationService.error('lang.imageTooBig');
        }
    }
}
