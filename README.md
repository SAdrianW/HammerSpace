### SEI PROJECT 2

# **HammerSpace**

HammerSpace, or Project-2, was a chance to put together an idea that I had be harbouring for quite a while. That idea being a portfolio of my miniatures. 
Since I have been busy working for the past few years I have fallen out of the habit of collecting, painting and gaming with my miniatures. Such a tragedy has let my memory of exactly what miniatures I have get a bit fuzzy.

The brief of Project-2 stated that at least 2 data entities must be used, in addition to Users. In a fit of either ambition or madness I decided on 4, not counting users, since I felt that 4 would be necessary to accuratly display the narure of all the relationships in miniature wargames. This fit of mania, slowed down my production and I was forced to hold back on additional features in the initial release of HammerSpace.

I have decided to define the contents of HammerSpace thusly:  
- Portfolio(s) are the top layer of the nested relationship in HammerSpace. At this level a Portfolio is a very general idea of what contains. Such as making 2 Portfolios, one for Science-Fiction minis and one for Fantasy minis. Within a Portfolio is usually an Army, or several. 
- An Army however is specific to everything belonging to a certain group or faction within a game or setting. Examples of what an Army could be are; Space Marines (Warhammer 40000, Games Workshop), Men of Gondor (LotR Battle Game, Games Workshop) or PanOceania (Infinity, Corvus Belli). In wargamming, as in life (since wargamming started its life as a way to predict the outcomes of wars), an Army is divided into Squads. 
- A Squad by definition contains multiple individuals, the "standard" number in gaming, as echoed from life, is 10 individuals. This number is of course arbitary and squads can contain anything from 3 to 50 individuals.
- A Unit as I have called it is simply an easier to type synomyn for individual. Therefor a Unit contains one and only one miniature. In a future version of HammerSpace I will allow for multiple images on one page so that different angles of a miniature can be taken.
- This relationship as described above could be summarised as such:

Portfolio > Army > Squad > Unit

- While I wanted to allow some flexibility in allowing Units and/or Squads to be placed outside of the heirachy described above. However this is not to be the case since I ran out of time and skill to implement such an advanced feature.

For those among you who missed it; HammerSpace is both a reference to a space for Warhammer to be displayed, as well as the name that the internet has given to the magical dimesion that characters in movies or games seem to pull endless supplies of stuff out of. Or draw full sized swords out of their sleeves, or something. Basically it's non-magicians doing the rabbit out of a hat trick, or the infinite scarf trick.

---
## Screenshots

![Portfolios page]()
---
![Squad page]()
---

## Creation Tools
- Node
- VS code
- JavaScript
- EJS
- CSS
- HTML
- MD
- MongoDB
- Atlas
- OAuth2
- Google OAuth
- NPM
- Mongoose
- Passport
- Express
- Method override
- Cloudinary
- Multer
- Bootstrap
- Figma


## Getting into the HammerSpace

Unfortunately the HammerSpace remains unaccessable to the majority of existence at this point. Once we invent dimesional tunneling or something we will have access. In the meantime I will endeavour to get this version of HammerSpace hosted on a web server somewhere.
For those of you who wish to see HammerSpace in its inception then I have some links that you might find interesting (assuming you can see my Figma boards).
- [Figma Planning Board](https://www.figma.com/file/9v736ttGScTvdFUYcBPKTN/Planning-board?type=design&node-id=0-1&mode=design&t=Bb61ARzAivkHy4W1-0)
- [Figma Blue-print mk2](https://www.figma.com/file/eOCNhQtWAUm5Tx6lTHyyg3/HammerSpace-blue-print-mk2-MVP?type=whiteboard&node-id=0-1&t=gdH6fILqWCouLcbh-0)
- [Figma Wireframes](https://www.figma.com/file/gffjmG6dJVU7FQ6WXCgBCy/Wireframes?type=design&node-id=7-72&mode=design&t=JIZ8DP9me50i7Gqg-0)
- [Figma Blue-print mk1 with ERD](https://www.figma.com/file/EroRDDSLoa68jAoyuA3tka/HammerSpace-blue-print-mk1?type=whiteboard&node-id=0-1&t=BZKyijF3aQY4So6M-0)

## Plans for the Future of **HammerSpace**
As I have already mentioned, I would like to loosen the relationships between data enitites. Also mentioned was multiple images on a single page.

Other plans that didn't get implemented were: 
- Comments on every data entity.
- Sorting lists by different criteria.
- Searching; For a specific name or part thereof, By Status or Genre tag.
- Moderator control for selected user accounts (Once on a live server)


