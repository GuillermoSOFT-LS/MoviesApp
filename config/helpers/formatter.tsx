export class Formatter {
    public  static currency(value: number): string {
        return new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: 'USD',
        }).format((value))
    }

    public static duration(minutes: number): string {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}min`;
    }
}