export class Employee {
    public constructor(
        public Id: number,
        public Name: string,
        public Phone: number,
        public City: string,
        public Selected: boolean = false) { }
}