import { DataJSON, DataType } from "../Data"

export const filterList = (Data: DataType[], paramsFilter: string[]) => {
  if (!paramsFilter.length) return DataJSON
  let dataFiltered: any
  let array = Data.map((data: DataType) => {
    for (let i = 0; i < paramsFilter.length; i++) {
      if (paramsFilter) dataFiltered = Object.values(data).flat().includes(paramsFilter[i])
      if (dataFiltered) return dataFiltered = data
    }
    return dataFiltered
  })
  array = array.filter(data => data !== false)
  return array
}
