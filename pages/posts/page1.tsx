import { CalendarHeader } from "@/components/calendarHeader";
import { Month } from "@/components/month";
import { getFuncWeek, getFunsMonth } from "@/util";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import { Week } from "@/components/week";

export default function Page1() {
    const [targetDate, setTargetDate] = useState<Date>(new Date());
    const [switchDisplay, setSwichDisplay] = useState<"月" | "週">("月");
    let monthCalendar = getFunsMonth(targetDate);
    let weekCalendar = getFuncWeek(targetDate);

    const addCalendarPlan = (day: Date) => {
        console.log("planを追加", day);
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
        </div>
    );
}
