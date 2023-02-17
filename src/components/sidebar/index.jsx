import React from 'react'

// style
import {Sidebar} from './style'

function FadeInSection(props) {
    return (
      <Sidebar
        className={`fade-in-section ${props.isVisible ? 'is-visible' : ''}`}
      >
        {props.children}
      </Sidebar>
    );
  }

function Index({isVisible}) {
    return (
      <FadeInSection isVisible={isVisible}>
        <Sidebar />
      </FadeInSection>
    )
}

export default Index
