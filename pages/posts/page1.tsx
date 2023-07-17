import { CalendarHeader } from "@/components/calendarHeader";
import { Month } from "@/components/month";
import { getFunsMonth } from "@/util";
import { useState } from "react";

export default function Page1() {
    const [currentMonth, setCurrentMonth] = useState(getFunsMonth(new Date()));
    return (
        <>
            <div>
                <CalendarHeader />
                <div>
                    <Month month={currentMonth}></Month>
                </div>
            </div>
        </>
    );
}
