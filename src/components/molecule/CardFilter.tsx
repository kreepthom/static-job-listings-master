import { CardThumb } from "../atoms/CardThumb"
import { DataJSON } from "../../Data"
import { useContextJob } from '../../hooks/useContextJob'
import './cardFilter.css'

export const CardFilter = () => {

  const { paramsFilter, setParamsFilter, setData }: any = useContextJob()

  const clearCardFilter = () =>{ 
    setParamsFilter([])
    setData(DataJSON)
  }

  return (
    <div className='container-cardthumb'>  
      <div>
        {paramsFilter && paramsFilter.map((param:string,i:number) =>(
          <CardThumb key={i}param={param}/>
        ))
        }
      </div>
      <button onClick={clearCardFilter}>clear</button>
    </div>
  )
}
