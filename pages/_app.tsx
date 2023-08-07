import GlobalContext from "@/context/GlobalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { MY_SCHEDULE } from "./calendar";

export default function App({ Component, pageProps }: AppProps) {
    const [isModal, setIsModal] = useState<boolean>(false);
    const [switchDisplay, setSwichDisplay] = useState<"月" | "週">("月");
    const [planTitle, setPlanTitle] = useState("");
    const [clickedDate, setClickedDate] = useState<Date>(new Date());
    const [mySchedules, setMySchedules] = useState<MY_SCHEDULE[]>([]);
    return (
        <GlobalContext.Provider
            value={{
                isModal,
                setIsModal,
                switchDisplay,
                setSwichDisplay,
                planTitle,
                setPlanTitle,
                clickedDate,
                setClickedDate,
                mySchedules,
                setMySchedules,
            }}
        >
            <Component {...pageProps} />
        </GlobalContext.Provider>
    );
}
