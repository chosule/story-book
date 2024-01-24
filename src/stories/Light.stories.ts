import { Meta, StoryObj } from "@storybook/react"
import Light from "./Light"


const meta:Meta<typeof Light> = {
    title:'test/light',
    component:Light
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args:{

    }
}