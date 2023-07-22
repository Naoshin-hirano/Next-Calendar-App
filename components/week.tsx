import React from "react";
import styles from "./week.module.css";
import { getEnglishWeek } from "@/util";
import getDay from "date-fns/getDay";
import getDate from "date-fns/getDate";
import format from "date-fns/format";

export const Week = (props: { week: Date[] }) => {
    const { week } = props;
    // 今日の日付を色付けする
    const getCurrentDayClass = (day: Date) => {
        return `${
            format(day, "yyyy/MM/dd") === format(new Date(), "yyyy/MM/dd")
                ? styles.todayMark
                : ""
        }`;
    };
    return (
        <div className={styles.weekBorder}>
            {week.map((day: Date, i: number) => (
                <div key={i} className={styles.dayBorder}>
                    <header className={styles.dayHeader}>
                        <p className={styles.dayFormat}>
                            {getEnglishWeek(getDay(day))}
                        </p>
                        <p
                            className={`${styles.dayText} ${getCurrentDayClass(
                                day
                            )}`}
                        >
                            {getDate(day)}
                        </p>
                    </header>
                </div>
            ))}
        </div>
    );
};
