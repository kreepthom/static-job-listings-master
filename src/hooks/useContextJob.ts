import { createContext, Dispatch, useContext } from "react";
import { DataType } from '../Data'


export type GobalContent = {
    string: string
    handleFilter: boolean
    paramsFilter: string[] | null
    Data: DataType[] | null
    setData:  ((p: DataType[]) => void)
    setParamsFilter:  ((p: string[]) => void)
    setHandleFilter:  ((p: boolean) => void)
}
const initialData: DataType[] = [{
    id: 1,
    company: "Photosnap",
    logo: "./assets/photosnap.svg",
    newer: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: null

}]
export const initialState: GobalContent = {
    string: '',
    Data: initialData,
    paramsFilter: null,
    handleFilter: false,
    setParamsFilter: () => {},
    setHandleFilter: () => {},
    setData: () => {},
}

export const MyContextJob = createContext<GobalContent>(initialState)

export const useContextJob = () => useContext(MyContextJob)