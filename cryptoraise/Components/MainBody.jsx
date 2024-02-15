import React from 'react'
import Cards from './Cards'

const MainBody = () => {
  return (
    <div>
        <div className="project-image w-[100%] h-[21.25rem] bg-black">Hello</div>
            <div className=" flex flex-auto gap-3 cards-display items-center justify-center my-[12%]">
                <Cards name={"Treatment of cancer"}/>
                <Cards name={"Life-style Fit Club"}/>
                <Cards name={"Renewable Energy"}/>
        </div>
    </div>  
  )
}

export default MainBody