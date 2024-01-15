import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { WordListView } from './word-list.view'

const meta: Meta<typeof WordListView> = {
    title: 'WordListView',
    component: WordListView,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof WordListView>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('word-list-view')

        expect(container).toBeTruthy()
    },
}
