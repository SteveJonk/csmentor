import { App as Events } from './events'
import { injectReact } from './injectReact'
import { App as MentorFinder } from './mentor-finder/views/MentorFinder'
import './non-react/gallerySlider'
import './non-react/menu'
import './non-react/partnerSlider'
import './non-react/scrollToTop'
import './non-react/testimonialSlider'

injectReact(MentorFinder, '#mentor-finder')
injectReact(Events, '#events')
