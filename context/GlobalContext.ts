import { Dispatch, SetStateAction, createContext } from "react";

const GlobalContext = createContext(
    {} as {
        switchDisplay: "月" | "週";
        setSwitchDisplay: Dispatch<SetStateAction<"月" | "週">>;
    }
);

export default GlobalContext;
