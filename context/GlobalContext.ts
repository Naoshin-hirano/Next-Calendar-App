import { MY_SCHEDULE } from "@/pages/calendar";
import { Dispatch, SetStateAction, createContext } from "react";

const GlobalContext = createContext(
    {} as {
        switchDisplay: "月" | "週";
        setSwitchDisplay: Dispatch<SetStateAction<"月" | "週">>;
        mySchedules: MY_SCHEDULE[];
        setMySchedules: Dispatch<SetStateAction<MY_SCHEDULE[]>>;
        isEditModal: boolean;
        setIsEditModal: Dispatch<SetStateAction<boolean>>;
        editPlanTitle: string;
        setEditPlanTitle: Dispatch<SetStateAction<string>>;
    }
);

export default GlobalContext;
