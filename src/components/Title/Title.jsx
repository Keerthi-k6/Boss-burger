import React from 'react'
const Title = ({fontSize, color,Title}) => {
  return (
    <div className={`innerwidth paddings flexCenter`} >
        <h1 style={{fontSize: fontSize, color: color}}>{Title}</h1>
      </div>
  )
}

export default Title
