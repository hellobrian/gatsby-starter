import { configure, addDecorator } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withA11y } from "@storybook/addon-a11y"

addDecorator(withKnobs)
addDecorator(withA11y)

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
