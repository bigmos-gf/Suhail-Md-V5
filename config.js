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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_47_01_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4LFxuICAgICAgICA3NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc2LFxuICAgICAgICA0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMixcbiAgICAgICAgMjUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDMxLFxuICAgICAgICA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU5LFxuICAgICAgICAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDU4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDksXG4gICAgICAgIDM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk4LFxuICAgICAgICAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDk0LFxuICAgICAgICAzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAzMyxcbiAgICAgICAgNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDk2LFxuICAgICAgICA2MixcbiAgICAgICAgMTYwLFxuICAgICAgICA2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MCxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwLFxuICAgICAgICA0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic1RCU1JZbHVTYnhTZWo3VUh3ckdDMCszUUpub3E4NWZPdTJhU2xqYkk4dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLWVfUktzXzFSWC1vS0g5MjNWUXVYUVwiLFxuICBcInBob25lSWRcIjogXCJiODdkZGU5My1mOTRjLTQyNTItODkyZC0zNDI3ZWVkNzcyYTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMTI4LFxuICAgICAgODcsXG4gICAgICA0LFxuICAgICAgMTY3LFxuICAgICAgNzIsXG4gICAgICAxOTksXG4gICAgICAxMDIsXG4gICAgICAzMSxcbiAgICAgIDE3NSxcbiAgICAgIDE1MCxcbiAgICAgIDEzNCxcbiAgICAgIDkzLFxuICAgICAgMTEsXG4gICAgICAxMTQsXG4gICAgICAxNTQsXG4gICAgICA3MyxcbiAgICAgIDI1MyxcbiAgICAgIDE3OCxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgNTEsXG4gICAgICAyMzksXG4gICAgICAyOCxcbiAgICAgIDIwNSxcbiAgICAgIDI2LFxuICAgICAgMTA0LFxuICAgICAgMTgwLFxuICAgICAgMTQyLFxuICAgICAgMjQzLFxuICAgICAgMTg2LFxuICAgICAgMTMyLFxuICAgICAgMjQ2LFxuICAgICAgMjM2LFxuICAgICAgMTY0LFxuICAgICAgOTIsXG4gICAgICAxLFxuICAgICAgODEsXG4gICAgICAzMixcbiAgICAgIDIyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxSlNYMjRXM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzODM5MjYzMDo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDY4NzU4OTM4NTgzNTQ6NThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnoyeFk4REVKdjArcnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrVE9jRG5WUHNsd3ZLVlB6aDJrOHZwNk03T054Q0tJc3FjcmpncFJoZEJNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZrYmYrbzNWZTE1KytpczcxdE5CanZra3dTQXdsYW4vWmhwVVJjVE83YlJFSm5iblVvRjJ4cDI4citMZFEzS0xUWWNnaWNpLzA3S0Y0SWhYV01rb0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhpZHR0a0haMnNOV0tOK0VjbXlNOWRlMDZFVUxjcjBPc0FDdllGU0E2QktkZXY0SUVUWWFReTNUbEU1RmhhSTl3RUs0dWRoNnd0bE84QmtZTnV2bWd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzgzOTI2MzA6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNjM1ODQzMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=="  // PUT your SESSION_ID 


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
