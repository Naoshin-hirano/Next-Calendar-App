import { MY_SCHEDULE } from "@/pages/calendar";
import { Dispatch, SetStateAction, createContext } from "react";

const GlobalContext = createContext(
    {} as {
        isModal: boolean;
        setIsModal: Dispatch<SetStateAction<boolean>>;
        switchDisplay: "月" | "週";
        setSwichDisplay: Dispatch<SetStateAction<"月" | "週">>;
        planTitle: string;
        setPlanTitle: Dispatch<SetStateAction<string>>;
        clickedDate: Date;
        setClickedDate: Dispatch<SetStateAction<Date>>;
        mySchedules: MY_SCHEDULE[];
        setMySchedules: Dispatch<SetStateAction<MY_SCHEDULE[]>>;
    }
);

export default GlobalContext;
