import { getEnglishWeek } from "@/util";
import styles from "./day.module.css";
import format from "date-fns/format";
import getDate from "date-fns/getDate";
import getDay from "date-fns/getDay";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MY_SCHEDULE } from "@/pages/posts/page1";

export const Day = (props: {
    day: Date;
    rowIdx: number;
    colIdx: number;
    setCalendarPlanModal: (rowIdx: number, colIdx: number) => void;
    mySchedules: MY_SCHEDULE[];
    setMySchedules: Dispatch<SetStateAction<MY_SCHEDULE[]>>;
    addCalendarPlan: (clickedDate: Date) => void;
}) => {
    const [scheduleList, setScheduleList] = useState<MY_SCHEDULE[]>([]);
    const {
        day,
        rowIdx,
        colIdx,
        setCalendarPlanModal,
        mySchedules,
        addCalendarPlan,
    } = props;
    console.log("Dayのレンダー");
    // 今日の日付を色付けする
    const getCurrentDayClass = () => {
        return `${
            format(day, "yyyy/MM/dd") === format(new Date(), "yyyy/MM/dd")
                ? styles.todayMark
                : ""
        }`;
    };

    useEffect(() => {
        const events = mySchedules.filter(
            (evt) =>
                format(evt.date, "yyyy/MM/dd") === format(day, "yyyy/MM/dd")
        );
        setScheduleList(events);
    }, [addCalendarPlan]);

    return (
        <div
            className={styles.dayBorder}
            onClick={() => setCalendarPlanModal(rowIdx, colIdx)}
        >
            <header className={styles.dayHeader}>
                {rowIdx === 0 && (
                    <p className={styles.dayFormat}>
                        {getEnglishWeek(getDay(day))}
                    </p>
                )}
                <div className={`${styles.dayText} ${getCurrentDayClass()}`}>
                    {getDate(day)}
                </div>
                <div className={styles.schedulerContainer}>
                    {scheduleList &&
                        scheduleList.map((schedule, index) => (
                            <div key={index} className={styles.scheduler}>
                                {schedule.title}
                            </div>
                        ))}
                </div>
            </header>
        </div>
    );
};
