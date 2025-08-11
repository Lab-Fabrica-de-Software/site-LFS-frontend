import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card, CardContent, CardDescription, CardHeader, CardSubtitle, CardTitle } from './card';

const meta = {
    title: 'UI/card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const WithImageClickable: Story = {
    args: {
        image: "https://picsum.photos/id/237/200/300",
        children:
            <div>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardSubtitle>Card Subtitle</CardSubtitle>
                </CardHeader>

                <CardContent>
                    <CardDescription>
                        This is a description of the card content. It provides additional information about the card.
                    </CardDescription>
                </CardContent>
            </div>
        ,
        onClick: () => alert('Card clicked!'),
    },
};

export const WithoutImageClickable: Story = {
    args: {
        children:
            <div>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardSubtitle>Card Subtitle</CardSubtitle>
                </CardHeader>

                <CardContent>
                    <CardDescription>
                        This is a description of the card content. It provides additional information about the card.
                    </CardDescription>
                </CardContent>
            </div>
        ,
        onClick: () => alert('Card clicked!'),
    },
};

export const Disabled: Story = {
    args: {
        children:
            <div>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardSubtitle>Card Subtitle</CardSubtitle>
                </CardHeader>

                <CardContent>
                    <CardDescription>
                        This is a description of the card content. It provides additional information about the card.
                    </CardDescription>
                </CardContent>
            </div>
        ,
    },
};

