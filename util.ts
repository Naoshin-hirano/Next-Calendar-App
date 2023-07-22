import eachDayOfInterval from "date-fns/eachDayOfInterval";
import endOfWeek from "date-fns/endOfWeek";
import eachWeekOfInterval from "date-fns/eachWeekOfInterval";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import startOfWeek from "date-fns/startOfWeek";

export const getFunsMonth = (date: Date) => {
    const sundays = eachWeekOfInterval({
        start: startOfMonth(date),
        end: endOfMonth(date),
    });
    // console.log("sundays", sundays);
    return sundays.map((sunday) =>
        eachDayOfInterval({ start: sunday, end: endOfWeek(sunday) })
    );
};

export const getFuncWeek = (date: Date) => {
    const thisWeek = eachDayOfInterval({
        start: startOfWeek(date),
        end: endOfWeek(date),
    });
    // console.log("thisWeek", thisWeek);
    return thisWeek;
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
