import {Link} from 'react-router-dom';

const ContentCom = ({datax}) => {
console.log(datax)
  return (
<div className='min-h-[80vh] flex justify-center items-center'>


  <div className=''>
    {/*////Dto nested mapping cuz nested json, complete 
    muna yung components like map mo muna si clam
    gawa then return  div with key
    ater that tsaka yung characters//*/}
 {
  datax.clans.map(prod =>{
   
    return(
      <div key={prod.id} className='flex gap-5 text-white items-center border border-[#fffffe] rounded '>
        <img src={prod.characters[7].images[0]} alt="" />
         <div className='px-10 text-center w-[100%]'>
         <h1>{prod.characters[7].name}</h1>
         <div className='w-[100%]  mt-3 bg-[#ff8906] rounded-sm'>
         <Link to={`${prod.characters[7].id}`} >see</Link>
         </div>
      
     
        </div>
          
        </div>
    )
  })
 }
  </div>
   
</div>
  )
}

export default ContentCom