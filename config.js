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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_31_01_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM3LFxuICAgICAgICA2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk2LFxuICAgICAgICA0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDM5LFxuICAgICAgICA3MSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMixcbiAgICAgICAgMTY2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc3LFxuICAgICAgICA1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDM0LFxuICAgICAgICAzMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyLFxuICAgICAgICA4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyLFxuICAgICAgICAzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBWW9MZ2NCYlE5aGFMZVQ3dXNyM3RLNTllR1RDRHU4MTNYTWlkOXdxWUt3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoM0hjVnZzZFFpMnJFTjI2LTZZcnhBXCIsXG4gIFwicGhvbmVJZFwiOiBcImRjMTJkOWYxLTM2NjktNDdkMi1hODlkLTJjODU4N2U3MmI3NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICAzNyxcbiAgICAgIDE4MyxcbiAgICAgIDIzOCxcbiAgICAgIDE0MyxcbiAgICAgIDEwMCxcbiAgICAgIDIzMCxcbiAgICAgIDE5NixcbiAgICAgIDcyLFxuICAgICAgMTQ0LFxuICAgICAgMTI5LFxuICAgICAgNTAsXG4gICAgICA0MixcbiAgICAgIDIyNCxcbiAgICAgIDI0OCxcbiAgICAgIDIxOSxcbiAgICAgIDI0NixcbiAgICAgIDc0LFxuICAgICAgOCxcbiAgICAgIDIwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDMsXG4gICAgICAxODgsXG4gICAgICA3NixcbiAgICAgIDI0LFxuICAgICAgMTE5LFxuICAgICAgMzcsXG4gICAgICAxNjAsXG4gICAgICA1OSxcbiAgICAgIDEyMSxcbiAgICAgIDE3OSxcbiAgICAgIDEyLFxuICAgICAgMTc1LFxuICAgICAgMTQ5LFxuICAgICAgMzksXG4gICAgICAxMDQsXG4gICAgICA3NCxcbiAgICAgIDEwLFxuICAgICAgMzAsXG4gICAgICA3MCxcbiAgICAgIDIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk4zRFg4SkpSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI1ODM2NDYyOjk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjQyMDEwMTIxNTAzMjk6OTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSytlbDVzQkVLL095cndHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwTmxHQk1peEZ1TlpJWXE2VklnNTJkd1dJUjNwTmk0bmF3OGVsMnAwdGdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjB2ZVpua3pwc0x2QlpWQjMwTWFPS3pmNks2V3pkZDdaRjQwU1hCa21JcXNnR1dVN3hyYkZmZXVac3g4MjdjanhkeUFMZ3BXSEVjWkgvSXdWcnB3WkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjg5dlRjd2toU3RlUFF0S21UTnNmdzN2eTl0Y1k4THNxMGgvMXVOY1MwRG1uKzA1cTVJZ2s0UDU1WktWSHhwNUZVaHFvU21DelBkTEdlc1ZXSHZkU0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjU4MzY0NjI6OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM3NjY0MzA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUExDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQTEMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGMDBtOXFqTE1lcjNvNnRkVklkUkZ5TkVVeVlUTUZ2S1Zsem9JV3ZDSWhZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMyNTQzOTI3OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
