import React from 'react'
import {Button} from "@nextui-org/react";
import cn from '../cn/Mergeclsx';


function Btn({title,icon , className}) {
  return (
    <>
  <Button color="primary" variant="shadow" className={cn(' bg-secondary text-primary w-[216px] h-[52px] rounded-[100px] py-4 px-5 font-worksans font-medium text-[16px]', className)} >
        {title}{icon}
      </Button>  
    </>
  )
}

export default Btn