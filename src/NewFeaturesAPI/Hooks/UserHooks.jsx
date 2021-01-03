import React, {useState} from 'react'

export default function UserHooks() {
  const [count, setCount] = useState(10);
  const OnBtn = () => {
    setCount(count + 2)
  }
  return (
    <div>
      <h2>显示值：{count}</h2>
      <button type="button" onClick={OnBtn}>点击+2</button>
    </div>
  )
}
