import { injectReact } from './injectReact'
import './non-react/gallerySlider'
import './non-react/scrollToTop'
import './non-react/testimonialSlider'
import { App as MentorFinder } from './views/MentorFinder'

injectReact(MentorFinder, '#mentor-finder')

alert('Doeiiz')
