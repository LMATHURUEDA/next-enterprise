Explain this project by details

Start from page.tsx file
  1. imports and metadata
  - import {Metadata} from "next"
    -> import metadata type from Next.js for define page-level metadata
  -import Image
    -> import Image component
  - export const metadata
    -> defines the metadata for page with title and description
  
  2. Main components
  - export function
    -> Main function component for homepage
  - <div>
    -> The entire content of the page wrap inside this element
  
  3. Header sections
  - className 'header'
    -> Containing logo, navigation, Get Started button
  - className 'container'
    -> to center and contain the header section
  - className 'nav'
    -> Menu component
  - Get Started button
    -> call-to-action button
  
  4. Main Content
  - className 'main'
    -> this tag contains the primary content of the page and split into multiple sections

  5. Footer Section
  - footer tag
    -> this tag contains the Solutions list, Resources lsit, Company list, Industries list and Follower list with multi-column footer
  - Get start button
    -> Same as above for call to action buttons

----------------------------------------------------------------

For tailwind.css file
  1. Directives
  - @import'tailwindcss'
    -> to import the core Tailwind CSS library

  2. Compatibility styles
  - @layer base
    -> apply styles with base layer of TailwindCSS
  - border-color
    -> compatibility fix ensure that border use specific color
  
  3. Default styles
  - *{...}
    - margin:0, padding:0
      -> remove default margin and padding
    - box-sizing: border-box
      -> make width and height properties include margin and padding
  
  4. CSS Variable
  - :root{...} 
    -> Defines custom style variables that can be use throughout the project
  
  5. Container class
  - .container
    -> Create responsive container

  6. Header styles
  - header{...}
    -> styles the logo and text-logo
  - .nav-links and .burger-menu
    -> styles the nav bar links and nav bar menu
  
  7. Main styles
  - .main
    -> main element display a mask to have wave like BG
  
  8. Hero section
  - .hero
    -> style the second section on page(the large text "Outsourcing worth talking about")

  9. Horizontal line
  - .horizontal-line
    -> styles the horizontal separator lines with the color
  
  10. Choose Solution and Solutions Item
  - .choose-solution
    -> styles for the section where the user is asked to choose solutions
  - .solutions
    -> styles for the container of the different solutions
  - .solution-item
    -> have a hover state
  
  11. Button
  - .button
    -> styles the main button(Get started)
  -.button-arrow
    -> styles the arrow icon inside the button

  12. Logo
  - .logo-cloud
    -> styles the logo cloud section
  
  13. Articles section
  - .articles
    -> styles the articles section
  
  14. Features section
  - .features
    -> displays grid format (3 columns, 2 rows) on large screens
  
  15. Testimonials section
  - .testimonials
    -> centers customer reviews with a styled background

  16. Steps section
  - .steps
    -> highlights a step-by-step process with a button interaction
  
  17. Story section
  - .story
    -> Display content in a column layout, adjusting to a row layout on larger screens
  
  18. Last section
  - .last and .pink-section
    -> adds final sections with BG images and buttons
  
  19. Footer section
  - uses a 2 columns layout for navigation links and other details

  



