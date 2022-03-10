import { render, screen } from '@testing-library/react';
import App from './App';
import nft from "./images/images/image-equilibrium.jpg"



test("test if Equilibrium and number 3429 is in the page", ()=> {
  render(<App/>)
  const numberTest = screen.getByText("Equilibrium #3429")
  expect(numberTest).toBeInTheDocument()
})
test("test if 0.041 ETH is in the page", ()=> {
  render(<App/>)
  const eth = screen.getByText("0.041 ETH")
  expect(eth).toBeInTheDocument()
})

test("test if 3 days left is in the page", ()=> {
  render(<App/>)
  const days = screen.getByText("3 days left")
  expect(days).toBeInTheDocument()
})
test("test if Jules Wyvern is in the page", ()=> {
  render(<App/>)
  const jules = screen.getByText("Jules Wyvern")
  expect(jules).toBeInTheDocument()
})


// describe('IMAGE', () => {
//   test('Image must have src = "image-equilibrium.jpg" and alt = "NFT shining cube"', () => {
//     render(<App/>);
//     const nft = screen.getByRole('img');
//     expect(nft).toHaveAttribute('src', 'nftCube');
//     expect(nft).toHaveAttribute('alt', 'NFT shining cube');
//   });
// });