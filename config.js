const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="amydollify@gmail.com"
global.location="Abj, Nigeria"


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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347025836462";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2347025836462";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2347040694847";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347025836462,2347025836462";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_55_02_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI2LFxuICAgICAgICA1NixcbiAgICAgICAgOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODksXG4gICAgICAgIDg0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNyxcbiAgICAgICAgOCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDU5LFxuICAgICAgICA1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA1OCxcbiAgICAgICAgNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDc4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDczLFxuICAgICAgICAxODYsXG4gICAgICAgIDU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMixcbiAgICAgICAgMTM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDM5LFxuICAgICAgICAyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg2LFxuICAgICAgICAzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRTNUOUVuWDB1THYycm1UWmdxd3cxSi9CaHhSZFYwVFJMcmQ4M05Ha2swVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWFRZR3d3a1BRSU9vdDNscUprdkZZUVwiLFxuICBcInBob25lSWRcIjogXCJmZmQ2ZTc2Yy0wODExLTQ3YjYtODBiZC04ZmRjZmM0OTdkMTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgNjksXG4gICAgICAxNTAsXG4gICAgICAyMzcsXG4gICAgICA4MSxcbiAgICAgIDExMyxcbiAgICAgIDMwLFxuICAgICAgMTAsXG4gICAgICA3LFxuICAgICAgMTcyLFxuICAgICAgODUsXG4gICAgICA3NixcbiAgICAgIDEzMyxcbiAgICAgIDE1OCxcbiAgICAgIDk5LFxuICAgICAgMTUsXG4gICAgICAxNTQsXG4gICAgICA4NSxcbiAgICAgIDE2OCxcbiAgICAgIDIyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAxNjIsXG4gICAgICAxODYsXG4gICAgICAyMjUsXG4gICAgICAxNTMsXG4gICAgICA0MCxcbiAgICAgIDc0LFxuICAgICAgMjQyLFxuICAgICAgOTYsXG4gICAgICA5NCxcbiAgICAgIDIyOCxcbiAgICAgIDIyNyxcbiAgICAgIDE3MSxcbiAgICAgIDIwMSxcbiAgICAgIDIsXG4gICAgICAyMDgsXG4gICAgICA2NSxcbiAgICAgIDI0MSxcbiAgICAgIDkyLFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFQSzJaNDlZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI1ODM2NDYyOjk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjQyMDEwMTIxNTAzMjk6OThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSytlbDVzQkVJQy9vYjBHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwTmxHQk1peEZ1TlpJWXE2VklnNTJkd1dJUjNwTmk0bmF3OGVsMnAwdGdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1qUlpjZkFTTitjYlI1bVpTSkxrYWxhZlRKWTcvUGY0SEE4MERWN0dlbk1mM3pncEtmOXZGbDMrRHNzWlNZaHQ1Q0h5SHBmQnh1R1BKNkhrb0dUZ0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktCU2J6cCt2aHN5U1NzZVVqQUpsZzZPV2tEN21tMlk0WGhIQnlJekdBeExNbWtDdXZZTUNXR2lxRlpqMWkya2hPOGROMmpNUkZteXN3b1I0ZXYxQUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjU4MzY0NjI6OThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM5MDg3NzQ4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUExDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQTEMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGMDBtOXFqTE1lcjNvNnRkVklkUkZ5TkVVeVlUTUZ2S1Zsem9JV3ZDSWhZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMyNTQzOTI3OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 уσυ αℓℓ αяє ѕтυρι∂ вιт¢нєѕ 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • мυαн αмуу』*\n youtube.com/hailtechinfo0"),
 
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
