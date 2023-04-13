import { injectReact } from './injectReact'
import './non-react/testimonial-slider'
import { App as MentorFinder } from './views/MentorFinder'

injectReact(MentorFinder, '#mentor-finder')
