import { getEnglishWeek } from "@/util";
import styles from "./day.module.css";
import format from "date-fns/format";
import getDate from "date-fns/getDate";
import getDay from "date-fns/getDay";
import {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import { MY_SCHEDULE } from "@/pages/calendar";
import GlobalContext from "@/context/GlobalContext";

export const Day = (props: {
    day: Date;
    rowIdx: number;
    colIdx: number;
    setCalendarPlanModal: (colIdx: number, rowIdx?: number) => void;
    mySchedules: MY_SCHEDULE[];
    addCalendarPlan: (clickedDate: Date) => void;
    setIsEditModal: Dispatch<SetStateAction<boolean>>;
    setEditPlanId: Dispatch<SetStateAction<Date>>;
    setClickedDate: Dispatch<SetStateAction<Date>>;
}) => {
    const [scheduleList, setScheduleList] = useState<MY_SCHEDULE[]>([]);
    const {
        day,
        rowIdx,
        colIdx,
        setCalendarPlanModal,
        mySchedules,
        addCalendarPlan,
        setIsEditModal,
        setEditPlanId,
        setClickedDate,
    } = props;
    const { setEditPlanTitle } = useContext(GlobalContext);
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
            onClick={() => setCalendarPlanModal(colIdx, rowIdx)}
        >
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
                        <div
                            onClick={(e) => {
                                console.log("内側がクリックされました");
                                e.stopPropagation();
                                setIsEditModal(true);
                                setEditPlanTitle(schedule.title);
                                setEditPlanId(schedule.id);
                                setClickedDate(schedule.date);
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
