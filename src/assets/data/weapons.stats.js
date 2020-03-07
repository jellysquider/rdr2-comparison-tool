const WEAPONS_STATS = [
  {
    "name": "Algernon's Revolver",
    "description": "Modified Double-action Revolver with a snub barrel, a customised grip and unique engravings.",
    "type": "R",
    "id": 1,
    "damage": 1.5,
    "improvedDamage": null,
    "range": 2,
    "improvedRange": null,
    "firingRate": 3.2,
    "improvedFiringRate": null,
    "accuracy": 2,
    "reloadingSpeed": 2.8,
    "improvedReloadingSpeed": null,
    "ammoCapacity": 6,
    "cost": null,
    "model": null,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/c/c9/RDR2_Weapon_DoubleActionRevolverAlgernon.jpg/revision/latest/scale-to-width-down/350?cb=20190125012428"
  },
  {
    "name": "Calloway's Revolver",
    "description": "A unique, custom-engraved Schofield Revolver plated in silver, with 'Canis Canem Edit' engraved into the side of the barrel. This sidearm previously belonged to the late gunslinger Jim 'Boy' Calloway, who was defeated in a duel at Brandywine Drop.",
    "type": "R",
    "id": 2,
    "damage": 1.9,
    "improvedDamage": null,
    "range": 2,
    "improvedRange": null,
    "firingRate": 2.8,
    "improvedFiringRate": null,
    "accuracy": 3,
    "reloadingSpeed": 2.5,
    "improvedReloadingSpeed": null,
    "ammoCapacity": 6,
    "cost": null,
    "model": null,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/f/ff/Calloway%E2%80%99s_revolver_compendium.jpeg/revision/latest?cb=20190126123731"
  },
  {
    "name": "Cattleman Revolver",
    "description": "A popular and classic sidearm, the Buck Cattleman is a great all-around revolver, featuring a good balance of damage, accuracy and fire rate.",
    "type": "R",
    "id": 3,
    "damage": 1.7,
    "improvedDamage": null,
    "range": 2,
    "improvedRange": "2.8",
    "firingRate": 3,
    "improvedFiringRate": null,
    "accuracy": 2.8,
    "reloadingSpeed": 2.7,
    "improvedReloadingSpeed": null,
    "ammoCapacity": 6,
    "cost": "50",
    "model": "Colt model 1873 Single Action Army Revolver",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/f/f9/Cattleman_Revolver_profile_RDRII.jpg/revision/latest?cb=20181121051735"
  },
  {
    "name": "Double-Action Revolver",
    "description": "The D.D. Packenbush Double-action Revolver is a fast-firing weapon with relatively low damage.",
    "type": "R",
    "id": 4,
    "damage": 1.5,
    "improvedDamage": null,
    "range": 2,
    "improvedRange": "2.8",
    "firingRate": 3.2,
    "improvedFiringRate": null,
    "accuracy": 2,
    "reloadingSpeed": 2.8,
    "improvedReloadingSpeed": "3.2",
    "ammoCapacity": 6,
    "cost": "65",
    "model": "Colt New model 1892 Army & Navy Revolver",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/5/5d/Doubleactionrevolverrdr2.jpeg/revision/latest?cb=20181124211649"
  },
  {
    "name": "Flaco's Revolver",
    "description": "A unique Cattleman Revolver, featuring delicate engravings and a carved ivory handle.  Previously owned by the late gunslinger Flaco Hernández, who was defeated in a duel at Cairn Lodge.",
    "type": "R",
    "id": 5,
    "damage": 1.7,
    "improvedDamage": null,
    "range": 2,
    "improvedRange": null,
    "firingRate": 3,
    "improvedFiringRate": null,
    "accuracy": 2.8,
    "reloadingSpeed": 2.7,
    "improvedReloadingSpeed": null,
    "ammoCapacity": 6,
    "cost": null,
    "model": null,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/2/2e/Flacosrevolver.jpeg/revision/latest/scale-to-width-down/350?cb=20181124212237"
  },
  {
    "name": "Granger's Revolver",
    "description": "A unique Cattleman Revolver, with a dark metal finish and endorned in custom engravings. Previously owned by the late gunslinger Emmet Granger, who was defeated in a duel near Flatneck Station.",
    "type": "R",
    "id": 6,
    "damage": 1.7,
    "improvedDamage": "2.7",
    "range": 2,
    "improvedRange": null,
    "firingRate": 3,
    "improvedFiringRate": null,
    "accuracy": 2.8,
    "reloadingSpeed": 2.7,
    "improvedReloadingSpeed": null,
    "ammoCapacity": 6,
    "cost": null,
    "model": null,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/2/2c/Grangergun.png/revision/latest?cb=20181123192847"
  },
  {
    "name": "John's Cattleman Revolver",
    "description": "Owned by John Marston, this Cattleman Revolver features a black steel frame and a custom bone grip, both of which show significant signs of wear.",
    "type": "R",
    "id": 7,
    "damage": 1.7,
    "improvedDamage": "2.7",
    "range": 2,
    "improvedRange": "2.8",
    "firingRate": 3,
    "improvedFiringRate": null,
    "accuracy": 2.8,
    "reloadingSpeed": 2.7,
    "improvedReloadingSpeed": null,
    "ammoCapacity": 6,
    "cost": null,
    "model": "Colt model 1873 Single Action Army Revolver",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/0/00/Johnscattlemanrdr2.jpeg/revision/latest/scale-to-width-down/350?cb=20181124212014"
  },
  {
    "name": "Micah's Revolver",
    "description": "One of the twin revolvers used by Micah Bell, this custom Double-action Revolver features a grey steel frame with a custom red-and-black skull grip. It also has 'Vengeance is hereby mine' hand etched into the side of the barrel.",
    "type": "R",
    "id": 8,
    "damage": 1.7,
    "improvedDamage": null,
    "range": 2,
    "improvedRange": null,
    "firingRate": 3.2,
    "improvedFiringRate": null,
    "accuracy": 2.2,
    "reloadingSpeed": 2.8,
    "improvedReloadingSpeed": null,
    "ammoCapacity": 6,
    "cost": null,
    "model": null,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/7/70/Micahs-revolver.jpg/revision/latest/scale-to-width-down/350?cb=20181120230620"
  },
  {
    "name": "Otis Miller's Revolver",
    "description": "A unique Schofield Revolver made of gold and ivory, and adorned with custom engravings. Found inside a cave in Cholla Springs, this weapon appears to have once been owned by the famed gunslinger Otis Miller.",
    "type": "R",
    "id": 9,
    "damage": 1.9,
    "improvedDamage": "2.9",
    "range": 2,
    "improvedRange": null,
    "firingRate": 2.8,
    "improvedFiringRate": null,
    "accuracy": 3,
    "reloadingSpeed": 2.5,
    "improvedReloadingSpeed": "3",
    "ammoCapacity": 6,
    "cost": null,
    "model": null,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/d/d3/Otismillerrevolver.jpg/revision/latest/scale-to-width-down/350?cb=20181123193521"
  },
  {
    "name": "Schofield Revolver",
    "description": "The powerful Hutton & Baird Schofield is an accurate revolver with high damage, making a good choice for any serious gunslinger. Despite a slower firing rate and reload speed, when compared with other revolvers, it can still be dual wielded to great effect.",
    "type": "R",
    "id": 10,
    "damage": 1.9,
    "improvedDamage": null,
    "range": 2,
    "improvedRange": "2.8",
    "firingRate": 2.8,
    "improvedFiringRate": null,
    "accuracy": 3,
    "reloadingSpeed": 2.5,
    "improvedReloadingSpeed": "3",
    "ammoCapacity": 6,
    "cost": "84",
    "model": "Smith & Wesson model 3 \"Schofield\" Revolver",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/4/45/Schofieldrevolverrdr2.jpeg/revision/latest?cb=20181124211103"
  },
  {
    "name": "M1899 Pistol",
    "description": "Only stocked by the best gunsmith in Saint Denis, the M1899 by Peeters & Janssens is a thoroughly modern sidearm. A semi-automatic handgun, the M1899 deals good damage at short range and its clip loaded ammunition allows for a swift reload.",
    "type": "P",
    "id": 11,
    "damage": 1.5,
    "improvedDamage": null,
    "range": 2,
    "improvedRange": null,
    "firingRate": 3.1,
    "improvedFiringRate": null,
    "accuracy": 3.2,
    "reloadingSpeed": 2.8,
    "improvedReloadingSpeed": null,
    "ammoCapacity": 8,
    "cost": "350",
    "model": "FN modele 1899",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/0/0b/M1899_Pistol2.png/revision/latest?cb=20191118141108"
  },
  {
    "name": "Mauser Pistol",
    "description": "A new import from Germany, the Mühlberg Mauser is a modern semi-automatic pistol with a low damage. The rapid fire rate of this weapon, along with a large ammo capacity, make this a good choice for close range combat, or when surrounded by multiple enemies.",
    "type": "P",
    "id": 12,
    "damage": 1.4,
    "improvedDamage": null,
    "range": 2,
    "improvedRange": "2.8",
    "firingRate": 3.1,
    "improvedFiringRate": null,
    "accuracy": 2.6,
    "reloadingSpeed": 3,
    "improvedReloadingSpeed": "3.3",
    "ammoCapacity": 10,
    "cost": "250",
    "model": "Mauser C96 Pistol",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/7/77/Mauserpistolrdr2.jpeg/revision/latest?cb=20181124205631"
  },
  {
    "name": "Midnight's Pistol",
    "description": "A unique Mauser Pistol, this weapon is gold-plated and features engravings with a grey wooden grip. Previously owned by the late gunslinger Billy Midnight, defeated in a duel on a train departing Rhodes.",
    "type": "P",
    "id": 13,
    "damage": 1.4,
    "improvedDamage": null,
    "range": 2,
    "improvedRange": "2.8",
    "firingRate": 3.1,
    "improvedFiringRate": null,
    "accuracy": 2.6,
    "reloadingSpeed": 3,
    "improvedReloadingSpeed": "3.4",
    "ammoCapacity": 10,
    "cost": null,
    "model": "Mauser C96 Pistol",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/c/cb/Midnightspistol.jpeg/revision/latest/scale-to-width-down/350?cb=20181124204930"
  },
  {
    "name": "Semi-Automatic Pistol",
    "description": "The new Peeters and Janssens Semi-Automatic Pistol deals less damage than revolver sidearms, but makes up for it by doing away with the need for weapon cocking, as well as an expanded ammo capacity and quicker magazine reloads.",
    "type": "P",
    "id": 14,
    "damage": 1.2,
    "improvedDamage": "2.2",
    "range": 2,
    "improvedRange": "2.8",
    "firingRate": 3.3,
    "improvedFiringRate": null,
    "accuracy": 2.7,
    "reloadingSpeed": 3.1,
    "improvedReloadingSpeed": "3.6",
    "ammoCapacity": 8,
    "cost": "210",
    "model": "Borchardt C-93 Pistol",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/5/53/Semiautomaticpistolcompendium.jpg/revision/latest?cb=20190610012735"
  },
  {
    "name": "Volcanic Pistol",
    "description": "The Hutton & Baird Volcanic Pistol combines the stopping power of a repeating rifle with the portability of a sidearm. Although the accuracy is good, the slow firing rate and reload speed mean that you'd better hit your target with the first shot.",
    "type": "P",
    "id": 15,
    "damage": 2.2,
    "improvedDamage": "3.2",
    "range": 2,
    "improvedRange": "2.8",
    "firingRate": 2,
    "improvedFiringRate": null,
    "accuracy": 3,
    "reloadingSpeed": 2.2,
    "improvedReloadingSpeed": null,
    "ammoCapacity": 8,
    "cost": "150",
    "model": "Smith and Wesson 1855 Volcanic Pistol",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/3/3f/Volcanicpistolcompendium.jpg/revision/latest?cb=20190610013103"
  },
  {
    "name": "Bolt Action Rifle",
    "description": "The B.D. & Co. Bolt Action is a strong and versatile rifle, built to perform in any environment. The bolt-action mechanism allows for quick firing and reloading, making this rifle an ideal choice for long-range combat with multiple targets.",
    "type": "RF",
    "id": 19,
    "damage": 2.9,
    "improvedDamage": null,
    "range": 3,
    "improvedRange": "4",
    "firingRate": 1.5,
    "improvedFiringRate": null,
    "accuracy": 3.2,
    "reloadingSpeed": 2.2,
    "improvedReloadingSpeed": "2.5",
    "ammoCapacity": 5,
    "cost": "180",
    "model": "Norwegian model 1894 Krag-Jørgensen",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/b/b9/Bolt_Action_Rifle_Compendium_rdr2.jpg/revision/latest?cb=20190608014707"
  },
  {
    "name": "Carcano Rifle",
    "description": "The Sireno Carcano is a long scoped bolt-action rifle that can hold several rounds at once. When combined with the fast firing rate and quick reload speed, this makes it ideal for facing several enemies in long-distance combat.",
    "type": "RF",
    "id": 20,
    "damage": 3.1,
    "improvedDamage": null,
    "range": 3.3,
    "improvedRange": "4",
    "firingRate": 1.5,
    "improvedFiringRate": null,
    "accuracy": 3.2,
    "reloadingSpeed": 2.8,
    "improvedReloadingSpeed": "3.2",
    "ammoCapacity": 6,
    "cost": "190",
    "model": "Carcano model 91/38 Short Rifle",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/5/57/Carcanoriflecompendium.jpg/revision/latest?cb=20190610015255"
  },
  {
    "name": "Rare Rolling Block Rifle",
    "description": "A unique Rolling Block Rifle made of light wood and blackened steel, adorned with carvings. Previously belonging to a bounty hunter after Josiah Trelawny, this weapon can be found in a barn near Braithwaite Manor.",
    "type": "RF",
    "id": 21,
    "damage": 3.5,
    "improvedDamage": "4",
    "range": 3.5,
    "improvedRange": "4",
    "firingRate": 1.2,
    "improvedFiringRate": null,
    "accuracy": 3.4,
    "reloadingSpeed": 1.9,
    "improvedReloadingSpeed": null,
    "ammoCapacity": 1,
    "cost": null,
    "model": "Remington Rolling Block Rifle",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/e/e9/Rare_Rolling_Block_Rifle_rdr2.png/revision/latest/scale-to-width-down/350?cb=20181112234442"
  },
  {
    "name": "Rolling Block Rifle",
    "description": "Designed for hunting large beasts, the Litchfield Rolling Block is a powerful long scoped rifle, designed for long-range combat. With multiple telescopic sights available in different zoom levels, a sharpshooter can eliminate a target from afar and gain the element of surprise.",
    "type": "RF",
    "id": 22,
    "damage": 3.5,
    "improvedDamage": "4",
    "range": 3.5,
    "improvedRange": "4",
    "firingRate": 1.2,
    "improvedFiringRate": null,
    "accuracy": 3.6,
    "reloadingSpeed": 1.9,
    "improvedReloadingSpeed": null,
    "ammoCapacity": 1,
    "cost": "187",
    "model": "Remington Rolling Block Rifle",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/9/97/Rollingblockriflecompendium.jpg/revision/latest?cb=20190610015032"
  },
  {
    "name": "Springfield Rifle",
    "description": "A military favorite, the Lancaster Springfield is a powerful breech-loading weapon designed for medium to long-range combat. The high accuracy makes this weapon effective against large mammals, but the slow firing rate may be an issue when trapped in close quarters.",
    "type": "RF",
    "id": 23,
    "damage": 3.2,
    "improvedDamage": "4",
    "range": 3,
    "improvedRange": "4",
    "firingRate": 1.2,
    "improvedFiringRate": null,
    "accuracy": 3.1,
    "reloadingSpeed": 1.8,
    "improvedReloadingSpeed": "2.1",
    "ammoCapacity": 1,
    "cost": "120",
    "model": "Springfield model 1873 \"Trapdoor\" Carbine",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/5/5e/Springfieldriflecompendium.jpg/revision/latest?cb=20190610014732"
  },
  {
    "name": "Varmint Rifle",
    "description": "The quick-firing Lancaster Varmint Rifle is designed for hunting small mammals and large birds, using a special low-caliber type of ammunition with reduced damage. However, the large ammo capacity and fast fire rate make this an effective weapon against large groups of enemies.",
    "type": "RF",
    "id": 24,
    "damage": 1.6,
    "improvedDamage": null,
    "range": 2.8,
    "improvedRange": "3.2",
    "firingRate": 2.8,
    "improvedFiringRate": "2.5",
    "accuracy": 2.9,
    "reloadingSpeed": 3.2,
    "improvedReloadingSpeed": "2.8",
    "ammoCapacity": 14,
    "cost": "72",
    "model": "Winchester model 1890",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/3/39/Varmint-rifle_Profile.png/revision/latest?cb=20190608195529"
  },
  {
    "name": "Carbine Repeater",
    "description": "A reliable and popular repeating rifle, the Buck Carbine provides medium damage and a decent firing rate, with quick reload speeds thanks to the tube-loaded magazine in the weapon's stock.",
    "type": "RP",
    "id": 17,
    "damage": 2.4,
    "improvedDamage": null,
    "range": 2.7,
    "improvedRange": null,
    "firingRate": 2,
    "improvedFiringRate": "2.3",
    "accuracy": 2.8,
    "reloadingSpeed": 3,
    "improvedReloadingSpeed": "3.4",
    "ammoCapacity": 7,
    "cost": "90",
    "model": "Spencer model 1865 Carbine",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/5/5b/Carbine_repeater_profile_rdr2.jpg/revision/latest?cb=20181123001158"
  },
  {
    "name": "Lancaster Repeater",
    "description": "The Lancaster Repeater is a well-rounded gun that uses a fast lever-action system to load the next cartridge. It has the lowest damage of all repeating rifles, but the quick firing rate and high accuracy give it the advantage.",
    "type": "RP",
    "id": 18,
    "damage": 2.2,
    "improvedDamage": null,
    "range": 2.8,
    "improvedRange": null,
    "firingRate": 2,
    "improvedFiringRate": "2.3",
    "accuracy": 2.9,
    "reloadingSpeed": 2.8,
    "improvedReloadingSpeed": "3.2",
    "ammoCapacity": 14,
    "cost": "135",
    "model": "Winchester model 1866",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/9/93/Lancasterrepeatercompendium.jpg/revision/latest?cb=20190610014544"
  },
  {
    "name": "Litchfield Repeater",
    "description": "The Litchfield Repeater is a great choice for hunting, with the best damage of all repeating rifles and a large ammo capacity. Despite a slower fire rate and reload speed, the Litchfield excels at medium range combat; perfect when needing to clear an area.",
    "type": "RP",
    "id": 25,
    "damage": 2.8,
    "improvedDamage": null,
    "range": 2.8,
    "improvedRange": null,
    "firingRate": 2.2,
    "improvedFiringRate": "2",
    "accuracy": 2.7,
    "reloadingSpeed": 3,
    "improvedReloadingSpeed": null,
    "ammoCapacity": 16,
    "cost": "145",
    "model": "1860 Henry Repeating Rifle",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/4/46/RDR2-Compendium-Litchfield_Repeater-Photo.jpg/revision/latest?cb=20181115133210"
  },
  {
    "name": "Double-barreled Shotgun",
    "description": "D.D. Packenbush's Double-Barreled Shotgun is the trailblazer's choice. Powerful and deadly at close range, this gun is capable of firing off two shots in quick succession, dropping nearly any target instantly.",
    "type": "S",
    "id": 57,
    "damage": 2.8,
    "improvedDamage": null,
    "range": 1.5,
    "improvedRange": 2,
    "firingRate": 2.5,
    "improvedFiringRate": "2.5",
    "accuracy": 1.8,
    "reloadingSpeed": 2,
    "improvedReloadingSpeed": null,
    "ammoCapacity": 2,
    "cost": 95,
    "model": "Remington model 1889",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/3/3f/Double-barrel-shotgun_profile_rdr2.jpg/revision/latest?cb=20181122235403"
  },
  {
    "name": "Pump-action Shotgun",
    "description": "The high-powered Lancaster Pump Shotgun has a large ammo capacity and quick reload capacities. Despite average accuracy, this gun will hold true should you find yourself confronted by wild beast or man in close combat.",
    "type": "S",
    "id": 26,
    "damage": 2.5,
    "improvedDamage": null,
    "range": 1.2,
    "improvedRange": 2,
    "firingRate": 2,
    "improvedFiringRate": null,
    "accuracy": 2.5,
    "reloadingSpeed": 2.5,
    "improvedReloadingSpeed": null,
    "ammoCapacity": 5,
    "cost": 148,
    "model": "Winchester model 1897 Shotgun",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/a/af/Pump-Action_Shotgun_rdr2.png/revision/latest?cb=20190531072739"
  },
  {
    "name": "Rare Shotgun",
    "description": "A rare Double-Barreled Shotgun with faded brass tarnish and adorned with carvings. Previously owned and cherished by a lonely woodsman living in solitude among the trees and wildlife of Roanoke Ridge.",
    "type": "S",
    "id": 27,
    "damage": 2.8,
    "improvedDamage": null,
    "range": 1.2,
    "improvedRange": 1.9,
    "firingRate": 2.5,
    "improvedFiringRate": "2.3",
    "accuracy": 1.5,
    "reloadingSpeed": 1.2,
    "improvedReloadingSpeed": "2.2",
    "ammoCapacity": 2,
    "cost": 95,
    "model": "Remington model 1889",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/2/23/Rare_Shotgun_rdr2.jpg/revision/latest?cb=20181123000305"
  },
  {
    "name": "Repeating Shotgun",
    "description": "The Lancaster Repeating Shotgun is a well-rounded gun that uses the same lever-action system commonly found on repeating rifles. The large ammo capacity gives the shooter the luxury of accuracy while maintaining the power ideal for close-quarter encounters.",
    "type": "S",
    "id": 28,
    "damage": 2.5,
    "improvedDamage": "3.4",
    "range": 1.5,
    "improvedRange": 2,
    "firingRate": 2,
    "improvedFiringRate": null,
    "accuracy": 2.2,
    "reloadingSpeed": 2.5,
    "improvedReloadingSpeed": "2.9",
    "ammoCapacity": 6,
    "cost": 185,
    "model": "Winchester model 1887",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/b/b8/Repeatingshotguncompendium.jpg/revision/latest?cb=20190610015900"
  },
  {
    "name": "Sawed-off Shotgun",
    "description": "The Peeters & Janssens Sawed-Off is a versatile shotgun that can be used easily with one hand or dual wielded to great effect. Rough and deadly, but widely inaccurate, this weapon is ideal for close quarter combat on foot or on horseback.",
    "type": "S",
    "id": 29,
    "damage": 2.8,
    "improvedDamage": "3.6",
    "range": 1.2,
    "improvedRange": 1.3,
    "firingRate": 2.3,
    "improvedFiringRate": null,
    "accuracy": 2,
    "reloadingSpeed": 2,
    "improvedReloadingSpeed": null,
    "ammoCapacity": 2,
    "cost": 85,
    "model": "Remington model 1889",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/8/80/Sawedoffshotguncompendium.jpg/revision/latest?cb=20190610020213"
  },
  {
    "name": "Semi-auto Shotgun",
    "description": "The Brun et Fabre Semi-Auto packs both power and speed into one shotgun. Featuring a high rate of fire, quick reloads and adequate magazine size, this shotgun is perfect for short-range combat against multiple targets.",
    "type": "S",
    "id": 30,
    "damage": 2.2,
    "improvedDamage": null,
    "range": 1.2,
    "improvedRange": 2,
    "firingRate": 2.5,
    "improvedFiringRate": "2.3",
    "accuracy": 2.5,
    "reloadingSpeed": 1.2,
    "improvedReloadingSpeed": "2.6",
    "ammoCapacity": 5,
    "cost": 225,
    "model": "Browning Auto-5 Shotgun",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/6/60/Semiautoshotguncompendium.jpg/revision/latest?cb=20190610020613"
  },
  {
    "name": "Antler Knife",
    "description": "A rare knife, with a handle manufactured from the antler of a stag, and part of the blade snapped off near the crossguard.",
    "type": "M",
    "id": 31,
    "damage": 2,
    "range": 0.5,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/5/5f/Antler_Knife_RDRII.jpg/revision/latest/scale-to-width-down/350?cb=20181029013610"
  },
  {
    "name": "Broken Pirate Sword",
    "description": "An old and rare pirate cutlass, with a long snapped blade and decorative golden handguard. With a longer range than most bladed melee weapon, this is still a practical combat weapon despite its age.",
    "type": "M",
    "id": 32,
    "damage": 2.1,
    "range": 0.5,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/b/b9/Broken_Pirate_Sword_RDRII.jpg/revision/latest?cb=20181029190123"
  },
  {
    "name": "Civil War Knife",
    "description": "An old Bowie Knife with a solid blade, worn wooden handle and large D-Shaped handguard for protection. This weapon was commonly used by Civil War soldiers, and is covered in rust.",
    "type": "M",
    "id": 33,
    "damage": 2,
    "range": 0.5,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/1/1a/Civil_War_Knife_Red_Dead_Redemption_II.jpg/revision/latest/scale-to-width-down/350?cb=20181029023908"
  },
  {
    "name": "Cleaver",
    "description": "A wide-bladed axe with a short ridged wooden handle, this hunting and cooking tool is usually used to prepare animal carcasses and chop through thick meat, cartilage and bone. As you can imagine, these properties also make for an effective combat weapon, and it can also be thrown.",
    "type": "M",
    "id": 34,
    "damage": null,
    "range": 0.5,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/6/60/Cleaverrdr2.jpeg/revision/latest?cb=20181124195917"
  },
  {
    "name": "Double Bit Hatchet",
    "description": "The Double Bit Hatchet is a weapon featured in Red Dead Redemption 2. It cannot be customized.",
    "type": "M",
    "id": 35,
    "damage": 2.3,
    "range": 1,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/f/f5/Double_Bit_Hatchet_RDRII.jpg/revision/latest/scale-to-width-down/350?cb=20181029002559"
  },
  {
    "name": "Fists",
    "description": "Fists are used for unarmed combat. When fists are equipped, the player can also perform kicks and other melee moves.",
    "type": "M",
    "id": 36,
    "damage": 1.3,
    "range": 0.5,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/e/ef/RD2_Fists_Symbol.png/revision/latest/scale-to-width-down/350?cb=20191113013743"
  },
  {
    "name": "Hatchet",
    "description": "A basic hand axe, with a wedged steel blade and long wooden handle. Designed for chopping wood, this powerful one-handed weapon can be swung to deliver a large amount of damage to an opponent. In a pinch, it can also be thrown at a target to take them down from a distance.",
    "type": "M",
    "id": 37,
    "damage": 2.3,
    "range": 1,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/d/da/Hatchetrdr2.jpeg/revision/latest?cb=20181124192952"
  },
  {
    "name": "Hewing Hatchet",
    "description": "This old and worn Hatchet has a flat edge along one side of the blade and is designed for hewing, the process of converting logs into lumber. This melee weapon was found in a tree stump near Moonstone Pond in the Grizzlies, next to an abandoned shack. This Hatchet can also be thrown.",
    "type": "M",
    "id": 38,
    "damage": 2.3,
    "range": 1,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/4/42/HewingHatchetrdr2compendium.jpg/revision/latest?cb=20190608210122"
  },
  {
    "name": "Hunter Hatchet",
    "description": "This hatchet is found in a tree stump south of Window Rock in Grizzlies West. In Online, the hatchet can be bought at any Fence.",
    "type": "M",
    "id": 39,
    "damage": 2.3,
    "range": 1,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/1/1c/Hunter_Hatchet-Red_Dead_Redemption_II.png/revision/latest?cb=20181028184749"
  },
  {
    "name": "Jawbone Knife",
    "description": "Deborah MacGuiness believes it's made of stegosaurus bone, but in reality, it's actually made of a common coyote jawbone.",
    "type": "M",
    "id": 40,
    "damage": 2,
    "range": 0.5,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/4/4b/Jawbone_Knife.png/revision/latest/scale-to-width-down/1000?cb=20190529013945"
  },
  {
    "name": "John'sKnife",
    "description": "Owned by John Marston, this sturdy hunting knife combines a deadly clip-point blade with a narrow wooden handle. It is slightly smaller than the default Hunting Knife, although it performs just the same. Along with his revolver, John can be seen with this weapon in 1899 during his time in the gang.",
    "type": "M",
    "id": 41,
    "damage": 2,
    "range": 0.5,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/e/e8/Johnsknife.jpeg/revision/latest/scale-to-width-down/350?cb=20181124193509"
  },
  {
    "name": "Machete",
    "description": "With a sharp broad blade, the Machete is designed for harvesting sugar cane, or clearing through forest undergrowth. However, this doesn't stop it from being an effective melee weapon with a longer range than most. One strong hack with this weapon will take any target down quickly and quietly.",
    "type": "M",
    "id": 42,
    "damage": null,
    "range": 0.5,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/9/9f/Macheterdr2.jpeg/revision/latest?cb=20181124194332"
  },
  {
    "name": "Ornate Dagger",
    "description": "The Ornate Dagger is a short melee weapon, featuring a decorated, silver blade. It deals a moderate amount of damage and is very short-ranged.",
    "type": "M",
    "id": 43,
    "damage": 2,
    "range": 0.5,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/7/7d/Ornate_Dagger_RDR2.jpg/revision/latest/scale-to-width-down/350?cb=20181109031654"
  },
  {
    "name": "Rusted Double Bit Hatchet",
    "description": "A rare Hatchet, featuring a rusted double-bladed head: one razor-sharp side for chopping and cutting; and a dull side for splitting wood. This melee weapon was found in a tree stump near the Annesburg Mine in Roanoke Ridge and, has seemingly been worn by the elements over time.",
    "type": "M",
    "id": 44,
    "damage": 2.3,
    "range": 1,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/e/e4/Rusted_Double_Bit_Hatchet_rdr2.jpg/revision/latest?cb=20181118101434"
  },
  {
    "name": "Rusted Hunter Hatchet",
    "type": "M",
    "id": 45,
    "description": "A rare Hatchet, with a long bearded axe bit that allows for greater control when planing or shaving wood. The melee weapon was found in a tree stump near Three Sisters in the Grizzlies, and has been worn by the elements over time. This Hatchet can also be thrown.",
    "damage": 2.3,
    "range": 1,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/f/fb/Rusted_Hunter_Hatchet_portrait_RDR2.jpg/revision/latest/scale-to-width-down/350?cb=20190130011723"
  },
  {
    "name": "Stone Hatchet",
    "description": "The Stone Hatchet is a weapon featured in Red Dead Redemption 2. It cannot be customized.",
    "type": "M",
    "id": 46,
    "damage": 2.3,
    "range": 1,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/1/1c/StoneHatchetrdr2compendium.jpg/revision/latest?cb=20190609002153"
  },
  {
    "name": "Viking Hatchet",
    "description": "As the name might suggest, the Viking Hatchet is similar to the regular hatchet: a basic hand axe, with a wedged steel blade and long wooden handle. It is designed for chopping wood, but owing to its robust build, this powerful one-handed weapon can not only be swung to deliver a large amount of damage to an opponent, but also thrown. The design is primitive, with rope and leather keeping the blade and wooden hilt together.",
    "type": "M",
    "id": 47,
    "damage": 2.3,
    "range": 1,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/3/38/Vikinghatchet.jpeg/revision/latest?cb=20181124192635"
  },
  {
    "name": "Wide-Blade Knife",
    "description": "A rare hunting knife with a wide clip-point blade and worn curved wooden handle. This knife was found sticking out of the back of a corpse deep in the mines of Beryl's Dream, Big Valley. The previous owner of this weapon went to great lengths to prevent their crime from being discovered.",
    "type": "M",
    "id": 48,
    "damage": 2,
    "range": 0.5,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/f/f2/Widebladeknife.jpeg/revision/latest?cb=20181124191716"
  },
  {
    "name": "Ancient Tomahawk",
    "description": "The Ancient Tomawhawk is a weapon featured in Red Dead Redemption 2 and Red Dead Online. It cannot be customized. This projectile can be found embedded in a target on the east side of Calumet Ravine, east of the Wapiti Indian Reservation. In Red Dead Online, the Ancient Tomahawk may be purchased at any Fence for $5.50.",
    "type": "T",
    "id": 49,
    "damage": 2.3,
    "range": 1,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/e/e9/Ancient_Tomahawk-RDRII.jpg/revision/latest?cb=20181028203237"
  },
  {
    "name": "Dynamite",
    "description": "A powerful explosive, designed for mining and construction purposes. It can be used to clear out groups of enemies, or effectively blow up a variety of things including mines, trains and safes. Light and throw towards your target, or place it down before igniting and running to a safe distance. It cannot be purchased from Gunsmith stores, but some less-than-reputable sellers may stock this item.",
    "type": "T",
    "id": 50,
    "damage": 3.6,
    "range": 1,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/e/ec/Dynamiterdr2.jpeg/revision/latest?cb=20181124195337"
  },
  {
    "name": "Fire Bottle",
    "description": "A glass bottle filled with flammable spirits, and topped with a cloth fuse. This explosive projectile will cause a large fireball on impact, useful for setting fire to stagecoaches or forcing people and animals to retreat. This weapon can be crafted by combining any type of alcoholic spirit with Animal Fat, or purchased from some less-than-reputable sellers.",
    "type": "T",
    "id": 51,
    "damage": 2.8,
    "range": 1,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/8/8b/Firebottlerdr2.jpeg/revision/latest?cb=20181124201420"
  },
  {
    "name": "Throwing Knife",
    "description": "A small knife with a straight blade, designed and balanced so it can be thrown with ease. Can be used to silently take down enemies at range, or used as a melee weapon if required. It can be purchased from some less-than-reputable sellers, or save a trip by recollecting the knife after throwing.",
    "type": "T",
    "id": 52,
    "damage": 2,
    "range": 1,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/8/8d/Throwingkniferdr2.jpeg/revision/latest/scale-to-width-down/350?cb=20181124200314"
  },
  {
    "name": "Tomahawk",
    "description": "A basic tomahawk with a lightweight wooden shaft and thin blade. This strong and fast projectile weapon is deal for quick thrown attacks, or it can be used as a close-range melee weapon against enemies if needed. It can be purchased from some less-than-reputable sellers, or save a trip by recollecting the tomahawk after throwing.",
    "type": "T",
    "id": 53,
    "damage": 2.5,
    "range": 1,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/1/1a/Tomahawkrdr2.jpeg/revision/latest/scale-to-width-down/350?cb=20181124194732"
  },
  {
    "name": "Bow",
    "description": "When used by a skilled archer, the Bow can be a deadly and accurate weapon at range, with many types of arrows able to be crafted. Whether using Small Game Arrows to hunt squirrels or the Dynamite arrow to make a bold statement, the Bow has been the weapon of choice for generations. This weapon can use Regular, Improved, Small Game, Poison, Fire and Dynamite arrows.",
    "type": "E",
    "id": 54,
    "damage": 2.3,
    "range": 1.7,
    "firingRate": "1.2",
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/f/f5/RDR2_Weapon_BowAndArrows-2699-1080.jpg/revision/latest/scale-to-width-down/350?cb=20190129014711"
  },
  {
    "name": "Hunting Knife",
    "description": "An all-purpose Bowie knife with a sharp clip-point blade, steel crossguard, and sturdy wooden handle. Designed for combat, this weapon can give the edge to any close-quarters melee fight, or be used for silent takedowns. For hunters, this is also the perfect weapon for killing and skinning animals. Remember: there are no rules in a knife fight.",
    "type": "E",
    "id": 55,
    "damage": 2,
    "range": 2.5,
    "firingRate": null,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/1/17/Huntingkniferdr2compendium.jpg/revision/latest?cb=20190608211912"
  },
  {
    "name": "Lasso",
    "description": "The lasso is a loop of rope that is designed to be thrown around a target and tightened when pulled. It is used for catching and taming wild horses, for lassoing people and to hogtie criminals to take them to jail for a bounty reward. The player can also lasso criminals around the waist or feet and drag them while riding a horse. The player is unable to use the lasso while on a train.",
    "type": "E",
    "id": 56,
    "damage": 0.5,
    "range": 0.8,
    "firingRate": null,
    "imgURL": "https://vignette.wikia.nocookie.net/reddeadredemption/images/0/0c/RDR2_Lasso_Symbol.png/revision/latest/scale-to-width-down/350?cb=20191114224515"
  }
]
export default WEAPONS_STATS;