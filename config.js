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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_32_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzksXG4gICAgICAgIDcwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MCxcbiAgICAgICAgMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY5LFxuICAgICAgICA0NixcbiAgICAgICAgMTA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDcwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODQsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4LFxuICAgICAgICAyMixcbiAgICAgICAgMTczLFxuICAgICAgICA4MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDY2LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDc1LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNCxcbiAgICAgICAgOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NixcbiAgICAgICAgNDksXG4gICAgICAgIDIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU1LFxuICAgICAgICA5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjExLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI4LFxuICAgICAgICAzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDY5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMyxcbiAgICAgICAgNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJcy9VWkJEWWNwTjRia1oxV2E2Q1ZnUWZFL0JXWmhIYlVTdVFxMTZra3VBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVUGEycXB3aVMzdUpoc2tvdlZOX0VnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA0MGNhYTg1LTVkOGQtNDJiNi1iM2RmLTI4ZTg2Y2Q0OWRiMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICAyMDcsXG4gICAgICAxMCxcbiAgICAgIDEzLFxuICAgICAgMTEzLFxuICAgICAgMTE1LFxuICAgICAgNTQsXG4gICAgICAxMzEsXG4gICAgICAxMTcsXG4gICAgICAxMTQsXG4gICAgICA3NixcbiAgICAgIDE4OCxcbiAgICAgIDIxNSxcbiAgICAgIDIzMCxcbiAgICAgIDIxLFxuICAgICAgNTQsXG4gICAgICA2MSxcbiAgICAgIDI1LFxuICAgICAgMTQ1LFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDc0LFxuICAgICAgMTY4LFxuICAgICAgOCxcbiAgICAgIDE2OSxcbiAgICAgIDE1NCxcbiAgICAgIDc5LFxuICAgICAgMTE5LFxuICAgICAgMjMyLFxuICAgICAgMTAyLFxuICAgICAgMTQ5LFxuICAgICAgMTQ3LFxuICAgICAgMTI4LFxuICAgICAgNTAsXG4gICAgICAxNDQsXG4gICAgICAyNDksXG4gICAgICA5MSxcbiAgICAgIDEwNSxcbiAgICAgIDE5NixcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDTFZMUjIyWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyOTQ5NTE4NDoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTYyMDg4MjQyNDIyMzE6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT244ak5zSEVOUFRxcnNHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwbnM2MExwSGhTVWtDWlY0dFVHczB0Q21BcDZPMnJkRzhBY0lOdWtPNjNjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFjcnBTUW8zRGU0TUI5d2NvZlpBTUpQTnV1RGsxNnVLKzlPdGdKSkxPQWxiQTA2bmNCUEZNVWUrZ1hZcDkxQWZ3bnc2WUtXTkU3b3hjUXlaVVhzS0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlY0dzkvUFJ3QWNkYVNqeXozbUdVMUpIWkR0WnQrVytCd1BqWGlqME5IcS90TWxhVWc3Z0J5OS9TNzQvc1NsOUZ6ajVEbEladi9ZTTh0WDJKTkZMSkRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjk0OTUxODQ6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTA0MzU0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU42TVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjZNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQW1hK2oydk5xVXJNalFLaGExSGJSQ21PNGl0ZGt3Y2x2VjZlTkd1MnRTZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDcwMTAxNjA4LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
