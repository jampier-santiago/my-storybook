import { Label } from "../../components/Label";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Props } from "../../components/Label";

export default {
  title: "UI/Label",
  component: Label,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
    fontColor: { control: "color" },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Basic = Template.bind({});
Basic.args = { label: "Prueba", allCaps: false };

export const AllCaps = Template.bind({});
AllCaps.args = { size: "normal", allCaps: true };

export const Secondary = Template.bind({});
Secondary.args = { size: "normal", color: "secondary" };

export const Tertiary = Template.bind({});
Tertiary.args = { size: "normal", color: "tertiary" };

export const CustomColor = Template.bind({});
CustomColor.args = { size: "h1", fontColor: "#5517ac" };

export const CustomBgColor = Template.bind({});
CustomBgColor.args = { size: "h1", fontColor: "#eeeeee", bgColor: "#000000" };
