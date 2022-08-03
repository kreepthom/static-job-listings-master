import {MdOutlineClose} from 'react-icons/md'
import {useContextJob} from '../../hooks/useContextJob'

interface Props {
  param:string
}



export const CardThumb = ({param}:Props) => {

  const {paramsFilter,setParamsFilter}:any = useContextJob()

  const Deleteparams = (param:string) => {
    setParamsFilter(paramsFilter.filter((thumb:string) => thumb !== param ))
  }
  
  return (
    <div className='cardthumb'>
        <span>{param}</span>
        <MdOutlineClose onClick={()=>Deleteparams(param)} className='iconEquis'/>
    </div>
  )
}
