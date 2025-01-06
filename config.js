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
global.caption = process.env.CAPTION || global.caption || "`Hail Amy you sluts`" 


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_48_01_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDcwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMixcbiAgICAgICAgMTY4LFxuICAgICAgICAzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDgwLFxuICAgICAgICA4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk0LFxuICAgICAgICA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDQsXG4gICAgICAgIDg4LFxuICAgICAgICA2NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc3LFxuICAgICAgICA2OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk1LFxuICAgICAgICAzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNixcbiAgICAgICAgMTU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDksXG4gICAgICAgIDExOCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDczLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5LFxuICAgICAgICA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4a2ZYUHlNdHNHVldEbThoZE44a1Vjd0JLa0FHNGtWVUhwbU44NWc0c2kwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkSjhlTVJWdFJLYXNNa29hckQ4NG9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI5NjlmYzExLTdhNWEtNDA5ZS05NGNjLWVhZGNlM2JhNjU1NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDEzLFxuICAgICAgOTIsXG4gICAgICAxOTcsXG4gICAgICAxMzEsXG4gICAgICAzOSxcbiAgICAgIDE1LFxuICAgICAgOTYsXG4gICAgICAxODUsXG4gICAgICAyMTgsXG4gICAgICA4MCxcbiAgICAgIDI1MixcbiAgICAgIDE5NSxcbiAgICAgIDIwMSxcbiAgICAgIDcxLFxuICAgICAgMTEzLFxuICAgICAgMjM3LFxuICAgICAgMjcsXG4gICAgICAyNTUsXG4gICAgICA1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDI1NCxcbiAgICAgIDEyMixcbiAgICAgIDExNyxcbiAgICAgIDE2NCxcbiAgICAgIDE0NixcbiAgICAgIDEwMSxcbiAgICAgIDE2OSxcbiAgICAgIDIxNCxcbiAgICAgIDIyNixcbiAgICAgIDcwLFxuICAgICAgMjE1LFxuICAgICAgMTQ5LFxuICAgICAgNDIsXG4gICAgICAzMCxcbiAgICAgIDE5NCxcbiAgICAgIDU1LFxuICAgICAgMTU2LFxuICAgICAgNDEsXG4gICAgICAxNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0NHSzZQRjNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4NTE2MTE1NTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDU5MzAzOTc4MTA3MjE6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZk1vSmNHRU12WDhic0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIloxME1OTWtheDVKTlZCOS9rZmMvTWhydHlFMEhzU3NjdndoQTRhQ3hHU0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNmtoT2wwSGN3RmJmdFM0UHZtcEx6Sm9OSXR2WGFuY0VjdFpsMWVHNThtR2ZpRG9NVUlUTW9lRGpFOEtIRytWLy9wcjVWZU82UWlQN3lRYWJUNUhYRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNktGVXhTMTdLbUxUUVEzczVyNVI0c3V3amRVT25yZGpPejUwSnBNNWV3YkVUVG55bnhxQjhQNGdqdkhrWk9WSDB3WlBTOWRvMFNpR1ZlMDdHYy9jQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzg1MTYxMTU1OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM2MjA3MzEyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3BaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPcFouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5SVVkYktNM1ZTRXo1eFBYT2Z2am41cmZ1czFWM0l0VHQ3WnhGWlQwRnZFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NTkzODEzMTksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczNjA4NDM2NDg0N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 POWERED BY BLESSED-MD 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • BLESSED TECH』*\n youtube.com/hailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "٭*AMY𖤐",
  packname: process.env.PACK_NAME || "HAIL AMY SLUTS",
  botname : process.env.BOT_NAME  || "`HAIL AMY SLUTS`",
  ownername:process.env.OWNER_NAME|| "`SEXY AMY`",


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
