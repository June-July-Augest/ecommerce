import {
  Component,
  ElementRef,
  OnChanges,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardFormData, FormDisplay } from '../userinfo.model';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css',
})
export class InfoCardComponent implements OnChanges {
  @Input({ required: true }) isProfile?: boolean;
  @Input({ required: true }) title?: string | null;
  @Input() image?: string;
  @Input({ required: true }) formDisplay?: FormDisplay;
  @Input({ required: true }) formValidator?: any;

  @ViewChild('imageUploadInput') imageUploader!: ElementRef<HTMLInputElement>;
  @ViewChild('img') img!: ElementRef<HTMLImageElement>;

  @Output() formData = new EventEmitter<CardFormData>();
  @Output() imageUrl = new EventEmitter<string>();

  isEditing = false;
  form!: FormGroup;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formValidator']) {
      this.initializeForm();
    }
  }

  initializeForm() {
    this.form = new FormGroup({
      firstLine: new FormControl(
        { value: this.formDisplay?.firstDisplay || '', disabled: !this.isEditing },
        this.formValidator?.firstField?.validators || []
      ),
      secondLine: new FormControl(
        { value: this.formDisplay?.secondDisplay || '', disabled: !this.isEditing },
        this.formValidator?.secondtField?.validators || []
      ),
      thirdLine: new FormControl(
        { value: this.formDisplay?.thirdDisplay || '', disabled: !this.isEditing },
        this.formValidator?.thirdField?.validators || []
      ),
      forthLine: new FormControl(
        { value: this.formDisplay?.forthDisplay || '', disabled: !this.isEditing },
        this.formValidator?.forthField?.validators || []
      ),
    });
  }

  saveUserInput() {
    if (!this.formDisplay) return;
    this.formDisplay.firstDisplay = this.form.controls['firstLine'].value;
    this.formDisplay.secondDisplay = this.form.controls['secondLine'].value;
    this.formDisplay.thirdDisplay = this.form.controls['thirdLine'].value;
    this.formDisplay.forthDisplay = this.form.controls['forthLine'].value;
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
    const action = this.isEditing ? 'enable' : 'disable';
    Object.values(this.form.controls).forEach(control => control[action]());
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

  onCancel() {
    this.toggleEditing();
    this.initializeForm();
  }

  onSubmit() {
    console.log(this.form.invalid)
    if(this.form.invalid) return
    // console.log(this.form.controls['firstLine'].invalid)
    // console.log(this.form.controls['secondLine'].invalid)
    this.toggleEditing();
    this.saveUserInput();
    this.formData.emit({
      firstData: this.form.controls['firstLine'].value || this.formDisplay!.firstDisplay,
      secondData: this.form.controls['secondLine'].value || this.formDisplay!.secondDisplay,
      thirdData: this.form.controls['thirdLine'].value || this.formDisplay!.thirdDisplay,
      forthData: this.form.controls['forthLine'].value || this.formDisplay!.forthDisplay,
    });
  }
}