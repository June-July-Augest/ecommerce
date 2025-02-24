import { Component, ElementRef, input, OnChanges, OnInit, output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardFormData } from '../userinfo.model';

@Component({
  selector: 'app-info-card',
  imports: [ReactiveFormsModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css',
})
export class InfoCardComponent implements OnChanges {
  
  isProfile = input.required<boolean>();
  title = input.required<string | null>();
  image = input.required<string | null | undefined>();
  firstDisplay = input.required<string | null>();
  secondDisplay = input.required<string | null>();
  thirdDisplay = input.required<string | null>();
  forthDisplay = input.required<string | null>();

  @ViewChild('imageUploadInput') imageUploader!: ElementRef<HTMLInputElement>
  @ViewChild('img') img!: ElementRef<HTMLImageElement>

  formData = output<CardFormData>();
  imageUrl = output<string>()

  isEditing = false;

  ngOnChanges(): void {
    this.resetForm()
  }

  form = new FormGroup({
    firstLine: new FormControl({ value: '', disabled: !this.isEditing }),
    secondLine: new FormControl({ value: '', disabled: !this.isEditing }),
    thirdLine: new FormControl({ value: '', disabled: !this.isEditing }),
    forthLine: new FormControl({ value: '', disabled: !this.isEditing }),
  });

  resetForm(){
    this.form.get('firstLine')?.setValue(this.firstDisplay())
    this.form.get('secondLine')?.setValue(this.secondDisplay())
    this.form.get('thirdLine')?.setValue(this.thirdDisplay())
    this.form.get('forthLine')?.setValue(this.firstDisplay())
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
    const action = this.isEditing ? 'enable' : 'disable';
    for (const control of Object.values(this.form.controls)) {
      control[action]();
    }
  }

  triggerFileInput() {
    this.imageUploader.nativeElement.click()
  }

  onImageUpload(event: Event) {
    const inputEle = event.target as HTMLInputElement;
    if (inputEle.files && inputEle.files[0]) {
      const imageFile = inputEle.files[0];
      const link = URL.createObjectURL(imageFile);
      this.imageUrl.emit(link)
   }

  }


  onCancle() {
    this.toggleEditing();
    this.resetForm();
  }

  onSubmit() {
    this.toggleEditing();
    this.formData.emit({
      firstData: this.form.controls.firstLine.value
        ? this.form.controls.firstLine.value
        : this.firstDisplay(),
      secondData: this.form.controls.secondLine.value
        ? this.form.controls.secondLine.value
        : this.secondDisplay(),
      thirdData: this.form.controls.thirdLine.value
        ? this.form.controls.thirdLine.value
        : this.thirdDisplay(),
      forthData: this.form.controls.forthLine.value
        ? this.form.controls.forthLine.value
        : this.forthDisplay(),
    });

    this.resetForm()
  }
}
