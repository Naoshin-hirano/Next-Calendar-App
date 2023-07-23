import { CalendarHeader } from "@/components/calendarHeader";
import { Month } from "@/components/month";
import { getFuncWeek, getFunsMonth } from "@/util";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import { Week } from "@/components/week";
import { PlanModal } from "@/components/common/planModal";

export default function Page1() {
    const [targetDate, setTargetDate] = useState<Date>(new Date());
    const [switchDisplay, setSwichDisplay] = useState<"月" | "週">("月");
    const [isModal, setIsModal] = useState<boolean>(false);
    const [clickedDate, setClickedDate] = useState<Date>(new Date());
    const [planTitle, setPlanTitle] = useState("");
    let monthCalendar = getFunsMonth(targetDate);
    let weekCalendar = getFuncWeek(targetDate);

    const setCalendarPlanModal = (
        day: Date,
        rowIdx: number,
        colIdx: number
    ) => {
        console.log("planを追加", day);
        console.log("newDate", new Date());
        console.log("row", rowIdx);
        console.log("col", colIdx);

        setIsModal(true);
        setClickedDate(monthCalendar[rowIdx][colIdx]);
    };

    const addCalendarPlan = () => {
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
