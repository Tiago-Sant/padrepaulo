import { render, screen } from '@testing-library/react'

import CardNews from '.'

describe('<CardNews />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardNews />)

    expect(screen.getByRole('heading', { name: /CardNews/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
