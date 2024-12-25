const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogemdidavid1@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`POWERED BY AMMY-MD`" 


global.devs = "2347025836462" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347040694847";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2347040694847";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2347040694847";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347040694847,2347040694847";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_31_12_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODksXG4gICAgICAgIDg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NCxcbiAgICAgICAgNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUyLFxuICAgICAgICA0NSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDExLFxuICAgICAgICA1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDcwLFxuICAgICAgICA1MixcbiAgICAgICAgMTkzLFxuICAgICAgICA5MixcbiAgICAgICAgNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2LFxuICAgICAgICA4MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDU1LFxuICAgICAgICA3MixcbiAgICAgICAgMTMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDM2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDUyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYdkJZUVZBRUJVcFBzY1VCMDJQaGN0akJ0dk5FZ3AvMVVXMDNSZ2Y4cVRNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZYmllb1c4SFJQV0RjZTFRV3JjSGtRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRhNTgxMTIyLTRjMGMtNGU2OS1iMGU5LTM1M2Q0MTU4NjEzZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTMsXG4gICAgICA4NixcbiAgICAgIDEyMyxcbiAgICAgIDE3OSxcbiAgICAgIDc0LFxuICAgICAgNTksXG4gICAgICAyMixcbiAgICAgIDIzMCxcbiAgICAgIDE4MixcbiAgICAgIDEzNyxcbiAgICAgIDE4MyxcbiAgICAgIDIzLFxuICAgICAgNzEsXG4gICAgICAxNjgsXG4gICAgICAyNDIsXG4gICAgICAxNjEsXG4gICAgICAyMDAsXG4gICAgICAyNTQsXG4gICAgICA4MSxcbiAgICAgIDE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDIyNSxcbiAgICAgIDUyLFxuICAgICAgNCxcbiAgICAgIDg2LFxuICAgICAgNTMsXG4gICAgICAxMzEsXG4gICAgICAyNDEsXG4gICAgICAyMTEsXG4gICAgICA4MixcbiAgICAgIDUzLFxuICAgICAgMjIxLFxuICAgICAgMSxcbiAgICAgIDIyNixcbiAgICAgIDE3OSxcbiAgICAgIDE1MSxcbiAgICAgIDY1LFxuICAgICAgMjIsXG4gICAgICAyMjMsXG4gICAgICA3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaOVQzQkw2WlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAyNTgzNjQ2Mjo4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY0MjAxMDEyMTUwMzI5Ojg0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tpZWw1c0JFSUdpcjdzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicE5sR0JNaXhGdU5aSVlxNlZJZzUyZHdXSVIzcE5pNG5hdzhlbDJwMHRncz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5NXNwQnpFdWlkNjBuZ1V2b2NrMzdwOUk3UDFTMnQ5bHV2aE5QbzQ0aXFMN2ZkM250NHNGVWJTZWxORDdJUzg1YzhhUzVjVjlOdUh4SFJsaFNJSjJCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjWXJMZWNKRDlxZ1g0aE9MSXVHdHJUbENTeFRDd3B6WWsvV0wvNFkxNDJkSnJMKytiamRyN1d2em5Yck9yRWZVMmFwQVNFL3lFZXVNL05yaUdxWjFnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDI1ODM2NDYyOjg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTExOTEwOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVAwNVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDA1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWksrQ1F6cEpYVEo4N1IzTXIwYkdYQlQwaHBTekt5ZXV4dHVLeUNTZnJuZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMjU0MzkyNjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 POWERED BY BLESSED-MD 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • BLESSED TECH』*\n youtube.com/hailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "BLESSED",
  packname: process.env.PACK_NAME || "BLESSED_MD",
  botname : process.env.BOT_NAME  || "`BLESSED_MD`",
  ownername:process.env.OWNER_NAME|| "`BLESSED`",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "BLESSED"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
