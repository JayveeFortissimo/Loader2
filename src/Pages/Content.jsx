import { useRouteLoaderData } from "react-router"
import ContentCom from '../Components/ContentCom';
const Content = () => {

const data = useRouteLoaderData('UchiasData');
  return  <ContentCom datax={data}/>
}

export default Content


export const dataUchia = async() =>{
  try{
    const response = await fetch('https://narutodb.xyz/api/clan?page=46&limit=1',{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    })

    const datas = await response.json();
    return datas;
  }catch(error){
    console.log(error);
  }
}