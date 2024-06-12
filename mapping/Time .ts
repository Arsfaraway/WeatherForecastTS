export class Time {

    public static CityTime(timeZone: number): string {

        const now = new Date();

        const localTime = new Date(now.getTime() + timeZone * 1000); // !!check city of the salt (Petesburg)

        const hours = localTime.getUTCHours().toString().padStart(2, '0');
        const minutes = localTime.getUTCMinutes().toString().padStart(2, '0');
        const seconds = localTime.getUTCSeconds().toString().padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    }

    public static ServerTime(): string {
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    }

    public static DiffCityServer(timeCity: string, timeServer: string): string {

        const hours1 = parseInt(timeCity.split(':')[0], 10);
        const hours2 = parseInt(timeServer.split(':')[0], 10);

        const difference = Math.abs(hours1 - hours2);

        const hours = difference.toString().padStart(2, '0');
        const minutes = '00';
        const seconds = '00';

        return `${hours}:${minutes}:${seconds}`;
    }
}
