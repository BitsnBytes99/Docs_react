  import React from 'react'
  import Card from './Card'

 
   function Foreground() {
   

    const data=[    {
            desc:"Hii ia am satyajit developer lorem hvhbhjjn jnhjbhbh.",
            filesize:".9mb",
            close:false,
            tag:{isOpen:true,tagTitle:"Download Now", tagColor:"green"},
    },
    {
        desc:"Hii ia am satyajit developer lorem hvhbhjjn jnhjbhbh.",
        filesize:".9mb",
        close:false,
        tag:{isOpen:true,tagTitle:"Download Now", tagColor:"blue"},
    },
{
    desc:"Hii ia am satyajit .",
    filesize:".9mb",
    close:false,
    tag:{isOpen:true,tagTitle:"Upload", tagColor:"green"},
},

 ];
    return (
         <div  className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flexwrap-wrap p-5'>
           {data.map((item,index)=>(
            <Card data={item}/>
           ))}
         </div>
    );
  }
  
  export default Foreground;
  

