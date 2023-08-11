import GlobalContext from "@/context/GlobalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

// 複数のコンポーネントで使用するstateをグローバル管理
export default function App({ Component, pageProps }: AppProps) {
    const [switchDisplay, setSwitchDisplay] = useState<"月" | "週">("月");
    return (
        <GlobalContext.Provider
            value={{
                switchDisplay,
                setSwitchDisplay,
            }}
        >
            <Component {...pageProps} />
        </GlobalContext.Provider>
    );
}
