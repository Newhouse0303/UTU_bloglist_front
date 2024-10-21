import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BlogForm from './BlogForm';

test('form calls the event handler with the right details', async () => {
    const mockHandler = jest.fn(); 

    render(
        <BlogForm handlePost={mockHandler} />
    );
    const user = userEvent.setup();

    const titleInput = screen.getByLabelText('title:'); 
    const authorInput = screen.getByLabelText('author:'); 
    const urlInput = screen.getByLabelText('url:'); 

    await user.type(titleInput, 'test title'); 
    await user.type(authorInput, 'test author'); 
    await user.type(urlInput, 'test url');

    const button = screen.getByText('create');
    await user.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(mockHandler).toHaveBeenCalledWith({
        title: 'test title',
        author: 'test author',
        url: 'test url',
    });
});
