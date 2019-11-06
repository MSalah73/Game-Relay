import React from 'react'
import {Accordion, Card, Nav}from 'react-bootstrap'

const SideMenu = (props) => {
      let menu = [["PC", "PlayStation 4", "Xbox One"],
                  ["This week", "Next week"]
                  ]
    let dropdowns = ["Platforms", "Releases"].map( (header, i) =>
              <Card.Header key={i}>{!i?header: "New "+header}<Card.Body className="sideItems">
                  {menu[i].map((item, j) => <li key={j} onClick={() => !i?props.platformHandler(item): props.releaseHandler(item)}><Nav.Link>{item}</Nav.Link></li>)}
              </Card.Body></Card.Header>
              )

  return (
    <Accordion className="sideMenu">
      <Card bg="dark" text="white">
        <Card.Header>
          Shortcuts!!!
        </Card.Header>
        {dropdowns}
      </Card>
    </Accordion>
  )
}

export default SideMenu