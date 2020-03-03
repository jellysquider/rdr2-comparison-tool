# rdr2-comparison-tool 
`Note: core functionality is under development`

A simple website to compare weapons in Read Dead Redemption 2

## The goal
I love playing RDR2 but it's impossible to visually compare where exactly the bar moves on each weapon's property so I started looking online and found that it's either I get spoilers about super cool gun at the end of the game or I skim through all kinds of tabled stats that are not sorted in any order and require a lot of time to get acquainted with.

So I decided to create a website that would let one sort, filter, and compare different weapons.

## Usage
I used [create-react-app](https://github.com/facebook/create-react-app) to initialize React development environment
* Clone the repo
* Run `npm install` inside of the root folder
* Run `npm start` inside of the root folder and head over to `localhost:3000`

### To-Do:
- [x] Fix the alignment of card stats
- [x] Add search functionality
- [ ] Add tooltips when hovering over weapon stats icons
- [ ] Refactor search to account for special characters (e.g. space, apostrophe, dash in weapons' names)
- [ ] Add filter functionality (by weapon type)
  - [ ] Firearms: Pistols and Revolvers, Rifles and Repeaters, Shotguns
  - [ ] Melee
  - [ ] Throwable
  - [ ] Equipment
- [ ] Add sort functionality by:
  - [ ] Damage
  - [ ] Range
  - [ ] Firing Rate
  - [ ] Accuracy
  - [ ] Cost
