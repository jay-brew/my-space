import React from 'react'

const Select = (props) => {
    // props.objList 가 string("phone")이라면 번호 리스트
    // props.objList가 object 타입이라면 넘겨준 objList로 select 생성
    let list = new Array();
    if(props.objList === "phone") {
        list.push("010","011","019")
    } else if(typeof(props.objList) === "object"){
        list = props.objList;
    } else {
        list.push("Option 없음")
    }

  return (
    <div>
        <select>
            {list.map((item, index)=><option value={item} ket={index}>{item}</option>)}
        </select>
    </div>

  )
}

export default Select