import { Sound } from "../../models/sounds/sounds.interface";

const soundsList: Sound[] = [
{title:`"N-O, T-O, R-I, O"`, path:"./assets/sounds/notorious.mp3", location:"Mayweather vs McGregor Tour: New York"},
{title:`"I'm gonna sleep this fool"`, path:"./assets/sounds/sleepthisfool.mp3", location:"Mayweather vs McGregor Tour: London"},
{title:`"I am boxing"`, path:"./assets/sounds/iamboxing.mp3", location:"Mayweather vs McGregor Tour: London"},
{title:`"Ah ha ha ha ha"`, path:"./assets/sounds/ahhahahaha.mp3", location:"Mayweather vs McGregor Tour: London"},
{title:`"Dress your age"`, path:"./assets/sounds/dressyourage.mp3", location:"Mayweather vs McGregor Tour: Toronto"},
{title:`"Breakdancer"`, path:"./assets/sounds/breakdancer.mp3", location:"Mayweather vs McGregor Tour: Toronto"},
{title:`"His head is too small"`, path:"./assets/sounds/hisheadistoosmall.mp3", location:"Mayweather vs McGregor Tour: Toronto"},
{title:`"Fuck Showtime too"`, path:"./assets/sounds/fuckshowtimetoo.mp3", location:"Mayweather vs McGregor Tour: Toronto"},
{title:`"He won't do shit"`, path:"./assets/sounds/hewontdoshit.mp3", location:"Mayweather vs McGregor Tour: Toronto"},
{title:`"Fuck the Mayweathers"`, path:"./assets/sounds/fuckthemayweathers.mp3", location:"Mayweather vs McGregor Tour: Toronto"},
{title:`"On the count of 3"`, path:"./assets/sounds/countof3.mp3", location:"Mayweather vs McGregor Tour: Toronto"},
{title:`"Does this mic work?"`, path:"./assets/sounds/doesthismicwork.mp3", location:"Mayweather vs McGregor Tour: Toronto"},
{title:`"I'm gonna sleep this fool"`, path:"./assets/sounds/sleepthisfool.mp3", location:"Mayweather vs McGregor Tour: LA"},
{title:`"Inside 4 rounds"`, path:"./assets/sounds/4rounds.mp3", location:"Mayweather vs McGregor Tour: LA"},
{title:`"His little..."`, path:"./assets/sounds/hislittle.mp3", location:"Mayweather vs McGregor Tour: LA"},
{title:`"He is fooked"`, path:"./assets/sounds/fooked.mp3", location:"Mayweather vs McGregor Tour: LA"},
{title:`"He's in a fucking track suit"`, path:"./assets/sounds/tracksuit.mp3", location:"Mayweather vs McGregor Tour: LA"},
{title:`"Somebody's 0"`, path:"./assets/sounds/somebodys0.mp3", location:"Mayweather vs McGregor Tour: LA"},
{title:`"Who the fuck is that guy?!"`, path:"./assets/sounds/whothefuckisthatguy.mp3", location:"UFC 205 Pre-Fight Press Conference"},
{title:`"Surprise Surprise"`, path:"./assets/sounds/surprisesurprise.mp3", location:"UFC 202 Post-Fight Interview"},
{title:`"You'll do fookin nuttin"`, path:"./assets/sounds/youlldofookinnuttin.mp3", location:"UFC 202 Pre-Fight Press Conference"},
{title:`"Dance for me, Nate"`, path:"./assets/sounds/danceforme.mp3", location:"UFC 196 Pre-Fight Press Conference"},
{title:`"You only answer the call"`, path:"./assets/sounds/nocalls.mp3", location:"UFC 196 Pre-Fight Press Conference"},
{title:`"I will eat his carcass"`, path:"./assets/sounds/eatcarcass.mp3", location:"UFC 196 Pre-Fight Press Conference"},
{title:`"Super heavyweight"`, path:"./assets/sounds/superheavyweight.mp3", location:"UFC 196 Pre-Fight Press Conference"},
{title:`"Kids' Jiu-Jitsu on a Sunday"`, path:"./assets/sounds/sundaybjj.mp3", location:"UFC 196 Press Conference"},
{title:`"KO'd stiff"`, path:"./assets/sounds/kodstiff.mp3", location:"UFC 196 Press Conference"},
{title:`"Me and Jesus are cool"`, path:"./assets/sounds/jesuscool.mp3", location:"UFC 196 Press Conference"},
{title:`"Gods recognize Gods"`, path:"./assets/sounds/gods.mp3", location:"UFC 196 Press Conference"},
{title:`"Left hand shot"`, path:"./assets/sounds/lefthand.mp3", location:"UFC 194 Post-Fight Interview"},
{title:`"Precision beats Power"`, path:"./assets/sounds/precision.mp3", location:"UFC 194 Post-Fight Interview"},
{title:`"Ireland baby, we did it. Yeah!"`, path:"./assets/sounds/irelandbaby.mp3", location:"UFC 194 Post-Fight Interview"},
{title:`"Da da da da da"`, path:"./assets/sounds/dadadadada.mp3", location:"UFC 194 Embedded"},
{title:`"Little twerp"`, path:"./assets/sounds/liltwerp.mp3", location:"The Ultimate Fighter S22"},
{title:`"More flowy, Artem"`, path:"./assets/sounds/moreflowy.mp3", location:"The Ultimate Fighter S22"},
{title:`"Nice and playful, Artem"`, path:"./assets/sounds/niceandplayful.mp3", location:"The Ultimate Fighter S22"},
{title:`"Snake in the grass"`, path:"./assets/sounds/snake.mp3", location:"The Ultimate Fighter S22"},
{title:`"Stuck in the mud"`, path:"./assets/sounds/stuckinthemud.mp3", location:"UFC Go Big Event"},
{title:`"I'll change your bum life"`, path:"./assets/sounds/bumlife.mp3", location:"UFC Go Big Event"},
{title:`"We done it baby!"`, path:"./assets/sounds/redpantynight.mp3", location:"UFC Go Big Event"},
{title:`"Fooook off"`, path:"./assets/sounds/fookoff.mp3", location:"UFC 189 Embedded"},
{title:`"You know what that means?"`, path:"./assets/sounds/youknowwhatthatmeans.mp3", location:"UFC 189 World Tour"},
{title:`"We're here to take over"`, path:"./assets/sounds/takeover.mp3", location:"Fight Night Dublin"},
{title:`"I pick the round"`, path:"./assets/sounds/picktheround.mp3", location:"UFC 178 Post-Fight Interview"},
{title:`"Call me Mystic Mac"`, path:"./assets/sounds/mysticmac.mp3", location:"UFC 178 Post-Fight Interview"},
{title:`"We all go to War"`, path:"./assets/sounds/weallgotowar.mp3", location:"UFC 178 Post-Fight Interview"},
{title:`"Whole different ball game"`, path:"./assets/sounds/featherweights.mp3", location:"UFC 178 Post-Fight Interview"},
{title:`"Truckloads of cash"`, path:"./assets/sounds/truckloads.mp3", location:"UFC 178 Post-Fight Press Conference"},
{title:`"Cocky in prediction"`, path:"./assets/sounds/cocky.mp3", location:"UFC 178 Post-Fight Interview"},
{title:`"Custom made suit"`, path:"./assets/sounds/customsuit.mp3", location:"UFC 178 Post-Fight Interview"},
{title:`"That's what I'm talkin bout"`, path:"./assets/sounds/thatswhatimtalkinbout.mp3", location:"UFC 178 Post-Fight Interview"},
{title:`"They don't talk like I talk"`, path:"./assets/sounds/talklikeitalk.mp3", location:"UFC 178 Q&A"},
{title:`"Rest my balls"`, path:"./assets/sounds/restmyballs.mp3", location:"BT Sport Interview"},
{title:`"60Gs baby!"`, path:"./assets/sounds/60gs.mp3", location:"UFC Sweden 2"}
]


 export const SOUNDS_LIST = soundsList;
