import { injectReact } from './injectReact'
import './non-react/gallerySlider'
import './non-react/menu'
import './non-react/partnerSlider'
import './non-react/scrollToTop'
import './non-react/testimonialSlider'
import { App as MentorFinder } from './views/MentorFinder'

injectReact(MentorFinder, '#mentor-finder')
