import { IContextType } from "@/utils/types";
import { createContext } from "react";

export const UserContext = createContext<IContextType | null>(null);