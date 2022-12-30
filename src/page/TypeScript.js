import React from 'react';


const  TypeScript = () => {

    const addNumberBtnClick = (num1:number, num2:number) => {
        console.log(num1+num2)
    }

  return (
    <div className='main'>
        TypeScript
        <div>
            <button onClick={()=>addNumberBtnClick(1,2)}>addNumber</button>
        </div>
    </div>
  )
}

export default  TypeScript