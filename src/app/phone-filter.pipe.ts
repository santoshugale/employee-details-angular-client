import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phoneFilter'
})
export class PhoneFilterPipe implements PipeTransform {
    public transform(value: string): any {
        if (!value) {
            return 'NA';
        }
        if (value.length < 9) {
            return 'NA';
        }
        let phone: number = Number(value);
        if (phone) {
            return phone;
        }
        return 'NA';
    }
}
