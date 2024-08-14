import { AbstractControl, ValidationErrors } from '@angular/forms';

export function joinDateValidator() {
  return (control: AbstractControl): ValidationErrors | null => {
    const joinDate = new Date(control.value);
    const today = new Date();

    // Reset thời gian của cả hai ngày về 00:00:00 để chỉ so sánh ngày tháng
    joinDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    // Kiểm tra nếu joinDate nhỏ hơn ngày hôm nay
    if (joinDate < today) {
      return { invalidJoinDate: true };
    }

    return null;
  };
}
