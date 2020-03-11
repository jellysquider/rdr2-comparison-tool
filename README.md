# rdr2-comparison-tool

A simple website to compare in-game weapons of Read Dead Redemption 2

## The goal
I love playing RDR2 but it's impossible to visually compare where exactly the bar moves on each weapon's property so I started looking online and found that it's either I get spoilers about super cool gun at the end of the game or I skim through all kinds of tabled stats that are not sorted in any order and require a lot of time to get acquainted with.

So I decided to create a website that would let one sort, filter, and compare different weapons.

## Usage
I used [create-react-app](https://github.com/facebook/create-react-app) to initialize React development environment
* Clone the repo
* Run `npm install` inside of the root folder
* Run `npm start` inside of the root folder and head over to `localhost:3000`

## Contributing
You are welcome to create a pull request even if you want to improve something as small as the text style as long as it adheres to RDR2 design scheme :)


### To-Do:

#### UI, UX, and styles
- [x] Fix the alignment of card stats
- [x] Render the table component with correct URL when user click on the "Compare weapons" button
- [x] Ensure the call-to-action button appears only when 2 or more weapons are selected
- [ ] Change the default look of the scrollbar to be more like RDR2 (maybe by using something like [this](https://github.com/malte-wessel/react-custom-scrollbars))
- [ ] <s>Add tooltips when hovering over weapon stats icons</s>(although the game almost never explained what each icon meant so that might be a part of the UX to figure it out on your own)
- [x] Preserve which items were selected when rendering search results (keep red card outline)
- [x] Preserve which table colums were selected for sorting (keep red font color)
- [x] Display caret-up or -down depending on how items were sorted

#### Search
- [x] Add search functionality
- [x] Refactor search to account for special characters (e.g. space, apostrophe, dash in weapons' names)


#### Filter
- [ ] Add filter functionality (by weapon type) 
  - [ ] Firearms: Pistols, Revolvers, Rifles, Repeaters, and Shotguns
  - [ ] Melee
  - [ ] Throwable
  - [ ] Equipment
- [ ] Add keys in boxes `[Q]` and `[E]` like in RDR2 UI with filter applied in between


#### Table Comparison
- [x] Parse params passed in the URL so that the link can be shared by copying and preserve which weapons were compared
- [x] Add sort functionality by:
  - [x] Damage
  - [x] Range
  - [x] Firing Rate
  - [x] Accuracy
  - [x] Cost
- [x] Add top of the category items below the table compontn to showcase which items (among selected) are the best in each category
- [x] Put top of the category between the `[Q]` and `[E]` box keys as well

#### Long-term 
- [ ] Improve functionality by enabling sorting by multiple attributes
- [ ] Let users create their own inventory and then compare items directly with their inventory (also keep their weapons in yellow color like the game does for <s>supreme</s> potions)