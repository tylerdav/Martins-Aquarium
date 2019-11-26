  
/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import addMouseOverEventListeners from './highlight.js'
import borderColorChange from './asideBorder.js'
import FishListComponent from './fishList.js'
import initializeDetailButtonEvents from './dialogs.js'
import { useFish } from './FishDataProvider.js'

FishListComponent ()
initializeDetailButtonEvents()
addMouseOverEventListeners()
borderColorChange()

const allOfTheFish = useFish ()




// console.log("all of the fish:", allOfTheFish)

// for(const fish of allOfTheFish)
//   console.log("individual fish object:", fish)
