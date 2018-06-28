import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phoneFilter'
})
export class PhoneFilterPipe implements PipeTransform {
    public transform(value: number): any {
        if (!value) {
            return 'NA';
        }
        if (value.toString().length < 10) {
            return 'NA';
        }
        let phone: number = Number(value);
        if (phone) {
            return phone;
        }
        return 'NA';
    }
}
