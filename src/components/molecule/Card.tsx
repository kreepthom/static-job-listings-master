import { AvatarCard } from "../atoms/AvatarCard"
import { CardData } from "../atoms/CardData"
import { CardRoles } from "../atoms/CardRoles"
import { DataType } from "../../Data"
import './card.css'

interface Props{
  Data:DataType
}

export const Card = ({Data}:Props) => {
  return (
    <div className='container-card'>
        <div>
          <AvatarCard url={Data.logo} company={Data.company}/>
          <CardData data={Data}/>
        </div>
        <CardRoles data={Data}/>
    </div>
  )
}
