import {
  Component,
  ElementRef,
  input,
  OnChanges,
  OnInit,
  output,
  ViewChild,
  Input,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardFormData, FormDisplay } from '../userinfo.model';

@Component({
  selector: 'app-info-card',
  imports: [ReactiveFormsModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css',
})
export class InfoCardComponent implements OnChanges {
  @Input({ required: true }) isProfile?: boolean;
  @Input({ required: true }) title?: string | null;
  @Input() image?: string;
  @Input({ required: true }) formDisplay?: FormDisplay;

  @ViewChild('imageUploadInput') imageUploader!: ElementRef<HTMLInputElement>;
  @ViewChild('img') img!: ElementRef<HTMLImageElement>;

  formData = output<CardFormData>();
  imageUrl = output<string>();

  isEditing = false;

  ngOnChanges(): void {
    this.resetForm();
  }

  form = new FormGroup({
    firstLine: new FormControl({ value: '', disabled: !this.isEditing }),
    secondLine: new FormControl({ value: '', disabled: !this.isEditing }),
    thirdLine: new FormControl({ value: '', disabled: !this.isEditing }),
    forthLine: new FormControl({ value: '', disabled: !this.isEditing }),
  });

  resetForm() {
    this.form.get('firstLine')?.setValue(this.formDisplay!.firstDisplay);
    this.form.get('secondLine')?.setValue(this.formDisplay!.secondDisplay);
    this.form.get('thirdLine')?.setValue(this.formDisplay!.thirdDisplay);
    this.form.get('forthLine')?.setValue(this.formDisplay!.forthDisplay);
  }

  saveUserInput() {
    this.formDisplay!.firstDisplay = this.form.controls.firstLine.value;
    this.formDisplay!.secondDisplay = this.form.controls.secondLine.value;
    this.formDisplay!.thirdDisplay = this.form.controls.thirdLine.value;
    this.formDisplay!.forthDisplay = this.form.controls.forthLine.value;
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
    const action = this.isEditing ? 'enable' : 'disable';
    for (const control of Object.values(this.form.controls)) {
      control[action]();
    }
  }

  triggerFileInput() {
    this.imageUploader.nativeElement.click();
  }

  onImageUpload(event: Event) {
    const inputEle = event.target as HTMLInputElement;
    if (inputEle.files && inputEle.files[0]) {
      const imageFile = inputEle.files[0];
      const link = URL.createObjectURL(imageFile);
      this.imageUrl.emit(link);
    }
  }

  onCancle() {
    this.toggleEditing();
    this.resetForm();
  }

  onSubmit() {
    this.toggleEditing();
    this.saveUserInput();
    this.formData.emit({
      firstData: this.form.controls.firstLine.value
        ? this.form.controls.firstLine.value
        : this.formDisplay!.firstDisplay,
      secondData: this.form.controls.secondLine.value
        ? this.form.controls.secondLine.value
        : this.formDisplay!.secondDisplay,
      thirdData: this.form.controls.thirdLine.value
        ? this.form.controls.thirdLine.value
        : this.formDisplay!.thirdDisplay,
      forthData: this.form.controls.forthLine.value
        ? this.form.controls.forthLine.value
        : this.formDisplay!.forthDisplay,
    });
  }
}
