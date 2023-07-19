import { CalendarHeader } from "@/components/calendarHeader";
import { Month } from "@/components/month";
import { getFunsMonth } from "@/util";
import { useState } from "react";

export default function Page1() {
    const [targetDate, setTargetDate] = useState<Date>(new Date());
    let calendar = getFunsMonth(targetDate);
    return (
        <>
            <div>
                <CalendarHeader
                    setTargetDate={setTargetDate}
                    targetDate={targetDate}
                />
                <div>
                    <Month month={calendar}></Month>
                </div>
            </div>
        </>
    );
}
