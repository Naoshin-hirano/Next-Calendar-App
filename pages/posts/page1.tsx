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
    let monthCalendar = getFunsMonth(targetDate);
    let weekCalendar = getFuncWeek(targetDate);

    const addCalendarPlan = (day: Date, rowIdx: number, colIdx: number) => {
        console.log("planを追加", day);
        console.log("newDate", new Date());
        console.log("row", rowIdx);
        console.log("col", colIdx);
        setIsModal(true);
        console.log("クリックした日付", monthCalendar[rowIdx][colIdx]);
        setClickedDate(monthCalendar[rowIdx][colIdx]);
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
                    addCalendarPlan={addCalendarPlan}
                />
            ) : (
                <Week week={weekCalendar} />
            )}
            <PlanModal
                isModal={isModal}
                setIsModal={setIsModal}
                clickedDate={clickedDate}
            />
        </div>
    );
}
