import {useContext} from 'react'
import { DataType } from "../../Data"
import {useContextJob} from '../../hooks/useContextJob'

interface Props {
  data: DataType
}

export const CardData = ({ data }: Props) => {

  const {setHandleFilter,handleFilter}:any =  useContextJob()
  const { company, newer, featured, position, postedAt, contract, location } = data

  const openCardFilter = ()=>{
    setHandleFilter(!handleFilter)
  }

  return (
    <div className="container-data">
      <div className="company">
        <h5>{company}</h5>
        {newer && <span>new!</span>}
        {featured && <span>feautured</span>}
      </div>
      <h3 onClick={openCardFilter}>{position}</h3>
      <ul className="list">
        <li>{postedAt}</li>
        <li>{contract}</li>
        <li>{location}</li>
      </ul>
    </div>
  )
}
