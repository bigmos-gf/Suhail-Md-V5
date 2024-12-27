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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_32_12_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDY5LFxuICAgICAgICA2OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNixcbiAgICAgICAgODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTAsXG4gICAgICAgIDc5LFxuICAgICAgICA4MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICA1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDcwLFxuICAgICAgICA3OSxcbiAgICAgICAgNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDgzLFxuICAgICAgICA5OSxcbiAgICAgICAgNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIsXG4gICAgICAgIDIyLFxuICAgICAgICA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk4LFxuICAgICAgICA2MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMCxcbiAgICAgICAgOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MixcbiAgICAgICAgMjU1LFxuICAgICAgICA1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjMsXG4gICAgICAgIDg2LFxuICAgICAgICA1MixcbiAgICAgICAgMTkyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExLFxuICAgICAgICAyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2LFxuICAgICAgICA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYjY2L1JxQ0ZuQXhGaERSNUdNNnAxMXRJWTR0alMwL0ZMaytJZ2JUV3FoRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUnYxNVA1ek1RMENDZ3lIeV9zLXIxd1wiLFxuICBcInBob25lSWRcIjogXCI3ZjhhNDFmMy05NGE3LTQzOTItYWJhYi0xMTE2NDIwM2MyOTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICA2MyxcbiAgICAgIDIyNSxcbiAgICAgIDEwOSxcbiAgICAgIDEyNixcbiAgICAgIDE2MCxcbiAgICAgIDM4LFxuICAgICAgMjEzLFxuICAgICAgMTg0LFxuICAgICAgMTU5LFxuICAgICAgMzUsXG4gICAgICA0MCxcbiAgICAgIDE4NixcbiAgICAgIDYxLFxuICAgICAgMTc3LFxuICAgICAgOTAsXG4gICAgICAxMTQsXG4gICAgICA3MSxcbiAgICAgIDE2MixcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDE4NCxcbiAgICAgIDEwNixcbiAgICAgIDIxNCxcbiAgICAgIDEyNCxcbiAgICAgIDEwNSxcbiAgICAgIDE2LFxuICAgICAgNDAsXG4gICAgICAxODQsXG4gICAgICAxOCxcbiAgICAgIDEyLFxuICAgICAgMjM0LFxuICAgICAgMjMxLFxuICAgICAgMTA5LFxuICAgICAgMjM5LFxuICAgICAgMTI0LFxuICAgICAgMTk4LFxuICAgICAgMTksXG4gICAgICA1NCxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNTks2RE5aUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyOTQ5NTE4NDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTYyMDg4MjQyNDIyMzE6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3Y4ak5zSEVKVEp1N3NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwbnM2MExwSGhTVWtDWlY0dFVHczB0Q21BcDZPMnJkRzhBY0lOdWtPNjNjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBXVElJWnliNGdTM2d5SmFrRUsyb0hJYmNnTmhmWEZ5TDJHTWxJay9kV3ptU2JJcFhUYWVGTURMc2RtK0xCWHV5MzQ3blhpNE1uN2o0NWhac0s4bkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFvNnJQM2hCWkI4R3gwQklvRzhLYlVReGphNkVLanZ6RzJMM2pUSS8wTHo5ZnVwbUJhczIvL2Zha3hCSnhzVWE1dTU2UWVtVFJhYWRTN05JaU9jbGpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjk0OTUxODQ6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTMyMDcyOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdFNVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0U1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUG9CZzkwaTN1QTlGWnMyNUVnZG40Um0vZlI3Wk9BbURVNlFvdWRwa3NWUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDcwMTAxNjEwLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczNTMwOTM5MDU1MVwifSIKfQ=="  // PUT your SESSION_ID 


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
