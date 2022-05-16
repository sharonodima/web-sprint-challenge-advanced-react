// Write your tests here
import React from 'react'
import AppFunctional from './AppFunctional'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

let squares, coordinates, steps, message, email
const updateStatefulSelectors = document => {
  squares = document.querySelectorAll('.square')
  coordinates = document.querySelector('#coordinates')
  steps = document.querySelector('#steps')
  message = document.querySelector('#message')
  email = document.querySelector('#email')
}

describe("Functional", () =>{
  beforeEach(()=>{
    render(<AppFunctional />)
    updateStatefulSelectors(document);
  })
  // afterEach(() => {
  //   document.body.innerHTML = ''
  // })

  
    test("Entering text in the email field causes it to change", ()=>{
      fireEvent.change(email, { target: { value: 'lady@gaga.com' } })
      expect(email).toHaveValue('lady@gaga.com')
    })
    test("coordinates starts at (2,2)", () => {
      expect(coordinates.textContent).toBe("Coordinates (2, 2)")
    })
})

