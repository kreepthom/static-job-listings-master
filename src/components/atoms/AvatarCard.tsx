
interface Props{
  url:string,
  company:string,
}
export const AvatarCard = ({url,company}:Props) => {
  return (
    <div>
      <img className="svg" src={url} alt={company} />
    </div>
  )
}
