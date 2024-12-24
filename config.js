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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_25_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzksXG4gICAgICAgIDI3LFxuICAgICAgICAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIyLFxuICAgICAgICA0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg4LFxuICAgICAgICA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ0LFxuICAgICAgICA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk3LFxuICAgICAgICAzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDE0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM3LFxuICAgICAgICA0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMixcbiAgICAgICAgNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtN2FBZjk0bitoTS9kQmdjVjZZbytJVmRVRFYrdkYzeTFadVhORUZmeFE4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGZVZGN1M5UlJvcVJpemRtdmJ2R293XCIsXG4gIFwicGhvbmVJZFwiOiBcIjY3MmUyY2IxLTQ2NmEtNDA1Ny1hNTNhLWE3YjljY2QwMjg3ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICA1MSxcbiAgICAgIDE2LFxuICAgICAgNyxcbiAgICAgIDg3LFxuICAgICAgMjUwLFxuICAgICAgMjE0LFxuICAgICAgMjE2LFxuICAgICAgMjMxLFxuICAgICAgNCxcbiAgICAgIDEyNSxcbiAgICAgIDE4MyxcbiAgICAgIDQwLFxuICAgICAgMjAxLFxuICAgICAgMjAyLFxuICAgICAgNTAsXG4gICAgICAyMzksXG4gICAgICAxNSxcbiAgICAgIDEzMSxcbiAgICAgIDE1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICAyNCxcbiAgICAgIDEyNSxcbiAgICAgIDIyNyxcbiAgICAgIDE3MixcbiAgICAgIDYwLFxuICAgICAgMjQzLFxuICAgICAgMTM4LFxuICAgICAgMTMxLFxuICAgICAgODMsXG4gICAgICA1MixcbiAgICAgIDE1NCxcbiAgICAgIDE4NixcbiAgICAgIDE1OSxcbiAgICAgIDEyLFxuICAgICAgMTg2LFxuICAgICAgMTA0LFxuICAgICAgMjIsXG4gICAgICAxOCxcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHUTFYNUxMNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAyNTgzNjQ2Mjo4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY0MjAxMDEyMTUwMzI5OjgyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0thZWw1c0JFTFNWckxzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicE5sR0JNaXhGdU5aSVlxNlZJZzUyZHdXSVIzcE5pNG5hdzhlbDJwMHRncz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEaTA5RXhNQ2JvSmIwWTZKVmYyZmZzdk03Yld6NHVPSHRUb1VrZW0rNGRVTXROcDhEUmd6cE5CRGh1ZE5lSTFlSHBTemh5N3JCTXl6eFQ5aUxucHlBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiSFh5aTUydWhSY2d4RjRSSTFRWERjS2RrVExON3JDNjU1Q2hoL1hKV0thcFQ4T0lKOHBaZUJHSUxzYktQMUdJZVNDRjNBb2VmN3hoOWhKN3E2ZG9Edz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDI1ODM2NDYyOjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTA2ODM0NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
