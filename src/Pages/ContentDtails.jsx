import { useParams } from "react-router-dom";

const ContentDtails = () => {

  const id = useParams()
  return (
    <div className="text-white min-h-[80vh] flex justify-center items-center">
      <div>
      {id.contentID}
      </div>

    </div>
  )
}

export default ContentDtails;

export const DatasIzumi = async() =>{
  try{

    const response = await fetch('')

  }catch(error){
    console.log(error)
  }
}