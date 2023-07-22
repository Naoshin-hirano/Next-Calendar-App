import { getEnglishWeek } from "@/util";
import styles from "./day.module.css";
import format from "date-fns/format";
import getDate from "date-fns/getDate";
import getDay from "date-fns/getDay";

export const Day = (props: {
    day: Date;
    rowIdx: number;
    colIdx: number;
    addCalendarPlan: (day: Date, rowIdx: number, colIdx: number) => void;
}) => {
    const { day, rowIdx, colIdx, addCalendarPlan } = props;
    // 今日の日付を色付けする
    const getCurrentDayClass = () => {
        return `${
            format(day, "yyyy/MM/dd") === format(new Date(), "yyyy/MM/dd")
                ? styles.todayMark
                : ""
        }`;
    };

    return (
        <div
            className={styles.dayBorder}
            onClick={() => addCalendarPlan(day, rowIdx, colIdx)}
        >
            <header className={styles.dayHeader}>
                {rowIdx === 0 && (
                    <p className={styles.dayFormat}>
                        {getEnglishWeek(getDay(day))}
                    </p>
                )}
                <p className={`${styles.dayText} ${getCurrentDayClass()}`}>
                    {getDate(day)}
                </p>
            </header>
        </div>
    );
};
