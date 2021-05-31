import { Story, Meta } from '@storybook/react/types-6-0'
import CardNews, { CardNewsProps } from '.'
import { Description } from 'components/Main/styles'


export default {
  title: 'CardNews',
  component: CardNews
} as Meta

export const Default: Story<CardNewsProps> = (args) => <CardNews {...args} />

Default.args = {
  title: 'title',
  description: 'description',
  category: 'category',
  date: '01/01/0001',
  image: ''
}
