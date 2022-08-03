
import { DataType } from "../../Data"
import { GobalContent, useContextJob } from '../../hooks/useContextJob'
import { filterList } from '../../helpers/filterList';
import { FC, ReactNode } from "react";

interface Props {
  data: DataType
}

interface IListList {
  roles: string
}

export const CardRoles = ({ data }: Props) => {
  const { setParamsFilter, paramsFilter, setData, Data }: GobalContent = useContextJob()
  const { role, level, languages, tools } = data

  const switcherFilter = (charac: string) => {
    if (!paramsFilter) setParamsFilter([charac])
    if (paramsFilter && !paramsFilter.includes(charac)) {
      setParamsFilter([...paramsFilter, charac])
      //@ts-ignore
      setData(filterList(Data, [...paramsFilter, charac]))
    }
  }

  const LiList: FC<IListList> = ({ roles }) => (<li onClick={() => switcherFilter(roles)}>{roles}</li>)

  return (
    <ul className="list-role">
      <LiList roles={role} />
      <LiList roles={level} />
      {languages &&
        languages.map((lang) => (
          <LiList key={lang} roles={lang} />
        ))
      }
      {tools &&
        tools.map((tool, i) => (
          <LiList roles={tool} key={tool} />
        ))
      }

    </ul>
  )
}
