export default class Time {


    static daysFrom(string){

        let date = new Date(string);
        let now = new Date();

        let str
        if (now.getHours() - date.getHours() < 1){
            str = now.getMinutes() - date.getMinutes() + ' دقیقه'
        }else if(now.getDay() - date.getDay() < 1) {
            str = now.getHours() - date.getHours() + ' ساعت'
        }
        if (now.getDay() - date.getDay() >= 1){
            str = now.getDay() - date.getDay() + ' روز'
        }
        return str + ' پیش'

    }
}