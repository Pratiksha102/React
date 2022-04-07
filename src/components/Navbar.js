import React from 'react'
import Proptypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>Navbar
        <h3> Hello Its a navbar {props.title}</h3>
    </div>
  )
}

Navbar.propTypes={
    title: Proptypes.string.isRequired

}

Navbar.defaultProps=
{
    title:"zigzag"
}