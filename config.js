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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_52_12_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDcwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNixcbiAgICAgICAgMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDM4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDMzLFxuICAgICAgICA1LFxuICAgICAgICA1MixcbiAgICAgICAgMTk5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MixcbiAgICAgICAgMTYyLFxuICAgICAgICAzNSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxLFxuICAgICAgICAyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDY1LFxuICAgICAgICA5MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInE4aEVLVlNtMVppK3l3MzBqMkpxNThTb2lmTUpFZFcwUXNkZVFkTzhzNVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldXM0RtdmZRVDl1Wm9VZ2hNeXoycXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWMxYmNjMWItMmViNy00NmVmLWI5YTYtOGQzYWQxOGViZjhmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDE4NixcbiAgICAgIDIzNSxcbiAgICAgIDE1OSxcbiAgICAgIDEyNyxcbiAgICAgIDE1NixcbiAgICAgIDE4NCxcbiAgICAgIDE0OSxcbiAgICAgIDE2OSxcbiAgICAgIDg1LFxuICAgICAgMjIyLFxuICAgICAgNzAsXG4gICAgICA5LFxuICAgICAgODMsXG4gICAgICA4NixcbiAgICAgIDI1MixcbiAgICAgIDIxMixcbiAgICAgIDE0OCxcbiAgICAgIDE5MSxcbiAgICAgIDIxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICAxNzMsXG4gICAgICAyNTMsXG4gICAgICA1OSxcbiAgICAgIDExMCxcbiAgICAgIDE5NCxcbiAgICAgIDIwMixcbiAgICAgIDUwLFxuICAgICAgNTQsXG4gICAgICA3NSxcbiAgICAgIDMyLFxuICAgICAgMTA3LFxuICAgICAgMTA4LFxuICAgICAgMTMxLFxuICAgICAgMTM4LFxuICAgICAgMTkyLFxuICAgICAgNzMsXG4gICAgICAxMjUsXG4gICAgICA4NixcbiAgICAgIDIzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDRTUxTVJKVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyOTQ5NTE4NDozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTYyMDg4MjQyNDIyMzE6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3Y4ak5zSEVOeSt5YnNHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwbnM2MExwSGhTVWtDWlY0dFVHczB0Q21BcDZPMnJkRzhBY0lOdWtPNjNjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktnb3lEeEh5L1dOYzA0N0t4bDI1bEQ2Z3hGQnNVVHlvaTRoRUVvV0pxSTFxNVRVZUhDcVVsU3lGMis0NndjSHV6cmUybkJkUlhFMnJkRk5nclR5ekFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIityVmszejJBVEJXMTdhK1lRM2pId0JFaEVCVDZZdmUyaG5iVHdEODF5K0hmOG5VclZwOHpKVndEdFFpUDBlOHlmWWJmVkw0QlU3cEhEcmRJOUNjdmh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjk0OTUxODQ6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTU0ODc2OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
