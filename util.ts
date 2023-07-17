import eachDayOfInterval from "date-fns/eachDayOfInterval";
import endOfWeek from "date-fns/endOfWeek";
import eachWeekOfInterval from "date-fns/eachWeekOfInterval";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";

export const getFunsMonth = (date: any) => {
    const sundays = eachWeekOfInterval({
        start: startOfMonth(date),
        end: endOfMonth(date),
    });
    return sundays.map((sunday) =>
        eachDayOfInterval({ start: sunday, end: endOfWeek(sunday) })
    );
};

export const getEnglishWeek = (index: number) => {
    switch (index) {
        case 0:
            return "Sun";
        case 2:
            return "Mon";
        case 3:
            return "Tue";
        case 4:
            return "Wed";
        case 5:
            return "Thi";
        case 6:
            return "Fry";
        default:
            return "Sat";
    }
};
