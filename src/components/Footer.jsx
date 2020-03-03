import React from 'react'

function Footer({ items }) {
  console.log({items})
  return (
    <div className='footer'>
      <p style={{textAlign: 'center'}}> Compare selected weapons
        {/* <ul style={{listStyle: 'none', display: 'inline-flex', paddingInlineStart: '10px'}}>
          {
            items.map((weapon) => <li style={{paddingRight: '10px'}}>{weapon.name.toLowerCase()}</li>)
          }
        </ul>
        between each other */}
      </p>
      
      
    </div>
    
  )
}

export default Footer;
// {
//   props.itemsToCompare.forEach((weapon) => 
//   weapon.name
// )}