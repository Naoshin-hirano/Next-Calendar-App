import { CalendarHeader } from "@/components/calendarHeader";
import { Month } from "@/components/month";
import { getFuncWeek, getFunsMonth } from "@/util";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import { Week } from "@/components/week";
import { PlanModal } from "@/components/common/planModal";

export type MY_SCHEDULE = {
    id: Date;
    title: string;
    date: Date;
};

export default function Page1() {
    const [targetDate, setTargetDate] = useState<Date>(new Date());
    const [switchDisplay, setSwichDisplay] = useState<"月" | "週">("月");
    const [isModal, setIsModal] = useState<boolean>(false);
    const [clickedDate, setClickedDate] = useState<Date>(new Date());
    const [planTitle, setPlanTitle] = useState("");
    const [mySchedules, setMySchedules] = useState<MY_SCHEDULE[]>([]);
    let monthCalendar = getFunsMonth(targetDate);
    let weekCalendar = getFuncWeek(targetDate);

    const setCalendarPlanModal = (rowIdx: number, colIdx: number) => {
        setIsModal(true);
        setClickedDate(monthCalendar[rowIdx][colIdx]);
    };

    const addCalendarPlan = (clickedDate: Date) => {
        const newSchedule = [
            ...mySchedules,
            {
                id: new Date(),
                title: planTitle,
                date: clickedDate,
            },
        ];
        console.log("newSchedule", newSchedule);
        setMySchedules(newSchedule);
        setPlanTitle("");
        setIsModal(false);
    };

    return (
        <div className={styles.container}>
            <CalendarHeader
                setTargetDate={setTargetDate}
                targetDate={targetDate}
                setSwichDisplay={setSwichDisplay}
                switchDisplay={switchDisplay}
            />
            {switchDisplay === "月" ? (
                <Month
                    month={monthCalendar}
                    setCalendarPlanModal={setCalendarPlanModal}
                    mySchedules={mySchedules}
                    setMySchedules={setMySchedules}
                    addCalendarPlan={addCalendarPlan}
                />
            ) : (
                <Week week={weekCalendar} />
            )}
            <PlanModal
                isModal={isModal}
                setIsModal={setIsModal}
                clickedDate={clickedDate}
                addCalendarPlan={addCalendarPlan}
                planTitle={planTitle}
                setPlanTitle={setPlanTitle}
            />
        </div>
    );
}
