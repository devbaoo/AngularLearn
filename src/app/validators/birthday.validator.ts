import { AbstractControl, ValidationErrors } from '@angular/forms';

export function birthdateValidator(minAge: number = 16) {
  return (control: AbstractControl): ValidationErrors | null => {
    const birthdate = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();

    // Kiểm tra nếu tuổi đã đủ 16 nhưng tháng hoặc ngày chưa tới thì chưa hợp lệ
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdate.getDate())
    ) {
      return { underAge: true };
    }

    if (age < minAge) {
      return { underAge: true };
    }

    return null;
  };
}
