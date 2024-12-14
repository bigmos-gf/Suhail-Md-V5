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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_26_12_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg0LFxuICAgICAgICA2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NCxcbiAgICAgICAgOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICA1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMixcbiAgICAgICAgOTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NyxcbiAgICAgICAgNixcbiAgICAgICAgMTYsXG4gICAgICAgIDUzLFxuICAgICAgICA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYzLFxuICAgICAgICA5NixcbiAgICAgICAgOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1LFxuICAgICAgICA4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTksXG4gICAgICAgIDg0LFxuICAgICAgICA1NixcbiAgICAgICAgNTgsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxLFxuICAgICAgICAxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicFJvNjhTRmo3cFJsYy8zK3haVzk3aFZkM1JUWUFxSmJrRzZ5V2pyREphaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV3M1RGlIQnJUMDJGMGJKSU5GWEFVQVwiLFxuICBcInBob25lSWRcIjogXCIzYmNmM2FhOC1iMWMyLTRjZDAtOTYxOS05NWM5YjhmODRiZTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMixcbiAgICAgIDMxLFxuICAgICAgMjM2LFxuICAgICAgMTE2LFxuICAgICAgNjcsXG4gICAgICAxODYsXG4gICAgICA2NixcbiAgICAgIDE5NyxcbiAgICAgIDEzOCxcbiAgICAgIDIxNixcbiAgICAgIDE4NixcbiAgICAgIDYsXG4gICAgICAxNTEsXG4gICAgICA3MyxcbiAgICAgIDE3MCxcbiAgICAgIDQ4LFxuICAgICAgODIsXG4gICAgICA5LFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDEwMixcbiAgICAgIDEwMCxcbiAgICAgIDE0MyxcbiAgICAgIDE1NyxcbiAgICAgIDMzLFxuICAgICAgMTE0LFxuICAgICAgMjE1LFxuICAgICAgNDgsXG4gICAgICA1NSxcbiAgICAgIDEyLFxuICAgICAgMTgxLFxuICAgICAgMjA4LFxuICAgICAgNTgsXG4gICAgICAyMTUsXG4gICAgICAyMSxcbiAgICAgIDE2OSxcbiAgICAgIDEsXG4gICAgICA1OCxcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyV0JOUURKUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0MDY5NDg0Nzo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTcwMjYxNDQ1ODk0MjM1OjQwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xTZjVLUUJFTDJlOWJvR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUWRYa1VDTGdVSEhFdjRaRk9tNVY0U1NKN1VzZ2piSlVqaSsxUnNScDFYYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnSEVORThhTWUxd3gzL055Z25RbHlWLzlpMWVZd2wyYUc0dm5RMVJPWTFGTEd1ZGRVMzNtQnk5OXNyNFlVd3I3a1BDL1UzNk9EV0N4MVJVbVVNelBEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQU2VjVHNWTlppb21xUit2a2xBUHFrS3BzYXFCSUxjSUt4WGpGcGd4WGxQTXdkNUpkUzlpSHRIbmd0TjhNUkc0RC9LcFFkOXkrU3pqYUFTWTkyNHJndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQwNjk0ODQ3OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQxNjgzODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQbEpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBsSi5qc29uIjogIntcImtleURhdGFcIjpcIk9lZi9FZlYxZkk1QUdJWHpUTktPVHFRLytickg3cGVZbTEyQzNXSElIQjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQ1NTc1MzQ2LFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM0MDUzNDUxMjU5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 POWERED BY AMMY-MD 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • AMMY TECH』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "AMMY",
  packname: process.env.PACK_NAME || "AMMY_MD",
  botname : process.env.BOT_NAME  || "`AMMY_MD`",
  ownername:process.env.OWNER_NAME|| "`AMMY`",


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
