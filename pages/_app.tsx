import GlobalContext from "@/context/GlobalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { MY_SCHEDULE } from "./calendar";

// 複数のコンポーネントで使用するstateをグローバル管理
export default function App({ Component, pageProps }: AppProps) {
    const [switchDisplay, setSwitchDisplay] = useState<"月" | "週">("月");
    const [mySchedules, setMySchedules] = useState<MY_SCHEDULE[]>([]);
    const [isEditModal, setIsEditModal] = useState<boolean>(false);
    const [editPlanTitle, setEditPlanTitle] = useState("");
    return (
        <GlobalContext.Provider
            value={{
                switchDisplay,
                setSwitchDisplay,
                mySchedules,
                setMySchedules,
                isEditModal,
                setIsEditModal,
                editPlanTitle,
                setEditPlanTitle,
            }}
        >
            <Component {...pageProps} />
        </GlobalContext.Provider>
    );
}
