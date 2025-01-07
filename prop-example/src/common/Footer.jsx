import React from 'react'

export default function Footer({footerDetails,userList,children}) {

  let {email}=footerDetails
    
  return (
    <div>
        {children}
        {
            userList.map((item,index)=> <div> {item} </div>)
        }
        <h3>
            {email}
            Footer</h3>
    </div>
  )
}
