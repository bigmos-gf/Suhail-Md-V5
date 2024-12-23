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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_28_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc1LFxuICAgICAgICA4NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMixcbiAgICAgICAgMTk1LFxuICAgICAgICA5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDg1LFxuICAgICAgICA2MyxcbiAgICAgICAgODEsXG4gICAgICAgIDcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDU2LFxuICAgICAgICA3MixcbiAgICAgICAgMzksXG4gICAgICAgIDE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDgxLFxuICAgICAgICA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY0LFxuICAgICAgICA4MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxLFxuICAgICAgICA1NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY2LFxuICAgICAgICA3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTksXG4gICAgICAgIDkzLFxuICAgICAgICA5NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidk5qandtRFVDVENLUFpVdjJkS214NFlINW9ZbjRpbXF5Ulk5NjMzSHhrTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ09qeFgyQzhTcWVhVWRweGg2WnJLQVwiLFxuICBcInBob25lSWRcIjogXCJmNGUzMzk3Mi00YjIyLTRiY2EtOGRlYy00MWYxOWU0ZDkzMzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA1LFxuICAgICAgMjA0LFxuICAgICAgMTI4LFxuICAgICAgNDEsXG4gICAgICA4LFxuICAgICAgMjQsXG4gICAgICAyMjEsXG4gICAgICAyOCxcbiAgICAgIDIxNSxcbiAgICAgIDIxNSxcbiAgICAgIDg4LFxuICAgICAgNjUsXG4gICAgICAzNyxcbiAgICAgIDE1NixcbiAgICAgIDE3MyxcbiAgICAgIDE0MyxcbiAgICAgIDExMyxcbiAgICAgIDEyLFxuICAgICAgMjE2LFxuICAgICAgMTAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NCxcbiAgICAgIDE0NCxcbiAgICAgIDE4NyxcbiAgICAgIDE5NSxcbiAgICAgIDE3OCxcbiAgICAgIDEwNCxcbiAgICAgIDIwNyxcbiAgICAgIDIxMCxcbiAgICAgIDIyOCxcbiAgICAgIDIyMCxcbiAgICAgIDg3LFxuICAgICAgMTkzLFxuICAgICAgMjIwLFxuICAgICAgMTU4LFxuICAgICAgMjUxLFxuICAgICAgMTM1LFxuICAgICAgMTg0LFxuICAgICAgMjQ2LFxuICAgICAgOTksXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFGRFhXS0RIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI1ODM2NDYyOjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjQyMDEwMTIxNTAzMjk6ODBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1dlbDVzQkVNNlNwYnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwTmxHQk1peEZ1TlpJWXE2VklnNTJkd1dJUjNwTmk0bmF3OGVsMnAwdGdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZEN2lFRThnN0hhRklHQmtDMkhSczVHK21TN3BKS3g2WlhLeUc3Y2g4c2VsckR3UW1aWENmQUhWdVlwNk9xd3UwODh5TThvRzhSTWhIRWdWa2N0L0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNiU3dveWYwQmhpZFgvNUxjbjd5TmlBcisxZE1VMXkwUTNaQTNHUi93WForVkYzS3NzMk1uL0lhZWFWUVd0dHRGRGRwT3RGY05XbjZnYm5PNjFHaWlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjU4MzY0NjI6ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0OTUzMjk5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUDA5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQMDkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTckVXV2R1dzZuRnNCcjBZL1U0ZDJnQ3BXTWVaMm8zbVZQOGFXbzlIUmhzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMyNTQzOTI2OCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDk0OTIwMDUxN1wifSIKfQ=="  // PUT your SESSION_ID 


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
