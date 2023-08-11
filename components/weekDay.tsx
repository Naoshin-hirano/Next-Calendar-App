import { getEnglishWeek } from "@/util";
import styles from "./weekDay.module.css";
import format from "date-fns/format";
import getDate from "date-fns/getDate";
import getDay from "date-fns/getDay";
import { useEffect, useState } from "react";
import { MY_SCHEDULE } from "@/pages";

export const WeekDay = (props: {
    day: Date;
    colIdx: number;
    setCalendarPlanModal: (colIdx: number, rowIdx?: number) => void;
    mySchedules: MY_SCHEDULE[];
    addCalendarPlan: (clickedDate: Date) => void;
    editCalendarModal: (schedule: MY_SCHEDULE) => void;
}) => {
    const [scheduleList, setScheduleList] = useState<MY_SCHEDULE[]>([]);
    const {
        day,
        colIdx,
        setCalendarPlanModal,
        mySchedules,
        addCalendarPlan,
        editCalendarModal,
    } = props;
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
            onClick={() => setCalendarPlanModal(colIdx)}
            className={styles.dayBorder}
        >
            <p className={styles.dayFormat}>{getEnglishWeek(getDay(day))}</p>
            <div className={`${styles.dayText} ${getCurrentDayClass()}`}>
                {getDate(day)}
            </div>
            <div className={styles.schedulerContainer}>
                {scheduleList &&
                    scheduleList.map((schedule, index) => (
                        <div
                            onClick={(e) => {
                                console.log("内側がクリックされました");
                                e.stopPropagation();
                                editCalendarModal(schedule);
                            }}
                            key={index}
                            className={styles.scheduler}
                        >
                            {schedule.title}
                        </div>
                    ))}
            </div>
        </div>
    );
};
