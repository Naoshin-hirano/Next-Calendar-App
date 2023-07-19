import { CalendarHeader } from "@/components/calendarHeader";
import { Month } from "@/components/month";
import { getFunsMonth } from "@/util";
import styles from "../../styles/Home.module.css";
import { useState } from "react";

export default function Page1() {
    const [targetDate, setTargetDate] = useState<Date>(new Date());
    const [switchDisplay, setSwichDisplay] = useState<"月" | "週">("月");
    let calendar = getFunsMonth(targetDate);
    return (
        <>
            <div className={styles.container}>
                <CalendarHeader
                    setTargetDate={setTargetDate}
                    targetDate={targetDate}
                    setSwichDisplay={setSwichDisplay}
                    switchDisplay={switchDisplay}
                />
                <div>
                    {switchDisplay === "月" && <Month month={calendar}></Month>}
                    {switchDisplay === "週" && <div>週の表示です</div>}
                </div>
            </div>
        </>
    );
}
