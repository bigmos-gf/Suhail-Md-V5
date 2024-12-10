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
global.caption = process.env.CAPTION || global.caption || "`POWERED BY BLESSED-MD`" 


global.devs = "2347040694847" // Developer Contact
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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_17_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDIyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDYxLFxuICAgICAgICA4NixcbiAgICAgICAgNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNCxcbiAgICAgICAgNzksXG4gICAgICAgIDQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDYyLFxuICAgICAgICA2OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNixcbiAgICAgICAgMjA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDExNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYzLFxuICAgICAgICA1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOFlBaFduLzBDdThSb1pWY3A3Ty9VZ1k4WjJLSzdSZlNhRnIzN1RSRnhtWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYWwyZk54dGlTN21UNFdvalVDYkNIUVwiLFxuICBcInBob25lSWRcIjogXCI4MGU5MmE2YS0yZWI3LTQwZTgtYmJjNS1lZTZmZmZlZGY2ZGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE3LFxuICAgICAgMTYxLFxuICAgICAgMjE5LFxuICAgICAgMjIsXG4gICAgICAxNjEsXG4gICAgICAxNTQsXG4gICAgICAxMCxcbiAgICAgIDExNCxcbiAgICAgIDE0MSxcbiAgICAgIDMwLFxuICAgICAgNTMsXG4gICAgICAxMDYsXG4gICAgICAxNzcsXG4gICAgICA0NixcbiAgICAgIDIzMyxcbiAgICAgIDg4LFxuICAgICAgODYsXG4gICAgICAyNTUsXG4gICAgICA2LFxuICAgICAgMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgNjcsXG4gICAgICAxODgsXG4gICAgICAyMzcsXG4gICAgICA1MSxcbiAgICAgIDE1MyxcbiAgICAgIDIwMCxcbiAgICAgIDE5NixcbiAgICAgIDE4MCxcbiAgICAgIDgzLFxuICAgICAgMjE3LFxuICAgICAgMjUyLFxuICAgICAgMTc5LFxuICAgICAgODIsXG4gICAgICAxOTIsXG4gICAgICA0NixcbiAgICAgIDE3LFxuICAgICAgMjMyLFxuICAgICAgMjM0LFxuICAgICAgMjM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxMWTRWV0JXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQwNjk0ODQ3OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVHdlZW55IGlzIERlYWRcIixcbiAgICBcImxpZFwiOiBcIjE3MDI2MTQ0NTg5NDIzNToxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMUFNvS3dERUpPcTRMb0dHQkVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1iZm1WdXAxcVR2YTZ4LzNMWXBVNVlvS1FBY0hqMERsSENZQUZmTlEzUTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYzhsa0xhejNybG1HZy9PSE96dzNTeGNLZUlidFhBbC9kWU56UE1SYXRXZWx1QitydVliWTVQY1JMZm1rZWR1MTl1dlhmZ2RBTG1uL3ZjS0NHTWVnQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYm1Jc3hhdUFEN2JlYU9qWkdSTG1oNU92WkNZT01UT0w3K0h1U2pIak9xa2FXYnlSMkJlZHNHZjExUmpRNXBtNnVwc3RGQkE2cUNuNUFMNVg4ZFNaREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MDY5NDg0NzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzODI1ODE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUFZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNQVkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1cVlpQ29DZVd3V0NjWWxJMnZVOHdZbDgrb0ZMNVd1NE1BcU1Ua3BMZStzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg5ODExNTg5MSxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw3LDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 POWERED BY BLESSED-MD 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • BLESSED TECH』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "BLESSED",
  packname: process.env.PACK_NAME || "BLESSED_MD",
  botname : process.env.BOT_NAME  || "`𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻`",
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
  LANG: ( process.env.THEME ||  "𝔻𝔸ℝ𝕋𝕆ℕ"  ).toUpperCase(),



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
