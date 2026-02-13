# Darvy: Local Cat Adoption (MiniProject 2)

### 
**Group Members:** Darius Beckford, Ivy Bowers

This website is a home page for Darvy, a local cat adoption center. We include a handy navigation bar with application options, an engaging and informational banner, a concise card-list of cats available, newsletter subscription options for interested viewers, and a nicely formatted footer for all contact/FAQ needs. Easily find our website among other tabs with our new tab Favicon, clearly displaying the logo of Darvy. This page is pure html and CSS with 4 newly added actions/interactivity buttons using JavaScript. These actions are: "Learn More" about each available cat, "Favorite" or "Star" your favorite cats to a list reachable in the NavBar, a "Clear Favorites" button to clear any list you've made in the "Cats"/Favorites tab of the navbar, and a "Subscribe" button to be added to the Darvy Newsletter. 

## Live Link:
https://darvy-cat-adoption.netlify.app/
---- 

## File Descriptions

### `index.html`
Main page structure containing the navbar, banner, cat cards container (`#catCards`), favorites panel, newsletter section, footer, and Learn More modal. The cards are now populated by JavaScript rather than hardcoded HTML.

### `styles/style.css`
All styling including layout, custom fonts (Bagel Fat One, Merriweather, Google Sans Flex), card design, favorites panel, modal overlay, and responsivness for mobile devices.

### `scripts/app.js`
All JavaScript functionality organized into four modules:
- **Card Generation** - Cat array and rendering functions
- **Learn More Modal** - Modal display and interaction
- **Newsletter Signup** - Email validation and user alerts
- **Favorites System** - localStorage persistence, UI updates, and panel management
---

### Major Sections in the page:
- [Darius] Fixed Position Navbar: Our navigation bar at the top of the page will remain fixed as you scroll through the page. In the left corner we have a clean, recognizable logo for Darvy. Clickable options on the right include Home, About, Contact, Cats available, and Apply for users inquiring about an adoption application.
- [Darius] Banner: The banner includes a drawing of an orange cat resting on a bed and an engaging introduction to what Darvy's mission is as a organization.
- [Ivy] Adoptee Display: Here we have a card/tile structure to display all of the cats currently available for adoption including each of their names, ages, and an image. Below this information is a clickable button to "Learn More" about each cat.
- [Ivy] Communication: This section gives the viewer an option to sign up for the company's newsletter to receive information on cat availability/wellbeing and location/hours of operation updates. There is an input field to subscribe the user's email to the newsletter on a beautiful orange cat background.
- [Darius] Footer: The footer also includes the same logo as the fixed navbar for consistency and visual-appeal as well as the business' tagline "Local cat adoption, made simple." Below this are numerous options for information on "Adopt"-ing a cat, "About" the business and how to contact them, and "Help" for any questions user's may have about resources, volunteering, and donating.
- [Ivy] Favicon Logo: The tab icon now has a logo that allows users to easily recognize our website if they have many other tabs open.
---

### Functions of the page:
- [Darius] Favorite/Star Buttons: Press the "Star" button to add your favorite cats to a list reachable in the NavBar. Favorites are saved to localStorage and persist on refresh. Used DOM functions: .querySelector, classList.toggle, .setAttribute, .getElementById.
- [Darius] Cats NavBar Button: Open/Close the favorite "Cats" dropdown. There is a badge that updates when you add/remove a cat to your favorites keeping count. Used DOM functions: .getElementById, element.hidden, .setAttribute, .innerHTML, .createElement, .appendChild. 
- [Darius] Clear Favorites Button: A "Clear Favorites" button to clear any list you've made in the "Cats"/Favorites tab of the navbar, and resets star icons. Used DOM functions: element.closest, event.preventDefault(), and previously listed.
- [Ivy] Learn More Buttons: "Learn More" about each available cat from a pop-up modal displaying the cats' image, name, and a little insight into their personality. Modal closes with 'x' or clicking outside modal. Uses DOM functions: .getElementById, .addEventListener, element.hidden, element.src, element.textContent.
- [Ivy] Subscribe to Newsletter Button: "Subscribe" button to be added to the Darvy Newsletter. User will get error pop-ups if no email is entered, an invalid email is entered, and a success pop-up will appear if a valid email is entered. Uses DOM functions: .getElementById, .addEventListener, .querySelector, alert().
- [Ivy] Cat Card Population: Generates all 9 cat cards from the cats array. Uses DOM functions: .getElementById, .createElement, .appendChild, .innerHTML, .textContent, .dataset.

## mini-project-01-spring2026
