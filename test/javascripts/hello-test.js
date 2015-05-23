import assert from 'power-assert'
import Hello from '../../frontend/javascripts/jsx/hello.jsx'

describe("Hello", ()=>{
  let hello = TestUtils.renderIntoDocument(<Hello/>)
  it("#render", ()=>{
    assert(hello.getDOMNode().textContent === 'Hello!!!!')
  })
})
