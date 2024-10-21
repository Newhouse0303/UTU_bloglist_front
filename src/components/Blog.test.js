import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

// test('renders title', () => {
//   const blog = {
//     title: 'Component testing is done with react-testing-library',
//   }
//   render(<Blog blog={blog} />)
//   const element = screen.getByText('Component testing is done with react-testing-library')
//   expect(element).toBeDefined()
// })

// test('renders author', () => {
//     const blog = {
//       author: 'Component testing is done with react-testing-library',
//     }
//     render(<Blog blog={blog} />)
//     const element = screen.getByText('Component testing is done with react-testing-library')
//     expect(element).toBeDefined()
//   })

test('like-button calls handler at every click', async () => {
    const blog = {
        likes: 5
    }
      const mockHandler = jest.fn()
    
      render(
        <Blog blog={blog} handleLikes={mockHandler} />
      )
    
      const user = userEvent.setup()
      const button = screen.getByText('Like')
      await user.click(button)
      await user.click(button)
    
      expect(mockHandler.mock.calls).toHaveLength(2)
    })