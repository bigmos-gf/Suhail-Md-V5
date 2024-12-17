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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_18_12_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDcyLFxuICAgICAgICA0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDU0LFxuICAgICAgICA4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0NixcbiAgICAgICAgMjI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUxLFxuICAgICAgICA4MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDU3LFxuICAgICAgICA1MixcbiAgICAgICAgMjAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYxLFxuICAgICAgICA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDc3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgNzUsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDYwLFxuICAgICAgICA0NixcbiAgICAgICAgMjA0LFxuICAgICAgICA5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzYsXG4gICAgICAgIDg4LFxuICAgICAgICA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk5LFxuICAgICAgICA2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4LFxuICAgICAgICA5NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9GemtmRjlUbDJpWDVhc0Y0U3F0SXF1aXRFNTFzM3hxWFhrTmcwYzR1YUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktaVXRFcHNNUk9LbjFFYXFFNTZiLVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWJhZjczNTgtYTczYy00ZjQzLTgyZDUtNWFiODU4ZmY5M2RjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDg2LFxuICAgICAgMjI1LFxuICAgICAgMjQ1LFxuICAgICAgMjUyLFxuICAgICAgNzAsXG4gICAgICAyMzcsXG4gICAgICAyMDksXG4gICAgICAxOTIsXG4gICAgICAxOTAsXG4gICAgICAxNjgsXG4gICAgICAxNjcsXG4gICAgICAxNCxcbiAgICAgIDMsXG4gICAgICAyMjUsXG4gICAgICAxOTAsXG4gICAgICA4MyxcbiAgICAgIDk2LFxuICAgICAgNTUsXG4gICAgICA0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICAyOSxcbiAgICAgIDM3LFxuICAgICAgMTkzLFxuICAgICAgMjM4LFxuICAgICAgMTM2LFxuICAgICAgMTIwLFxuICAgICAgODEsXG4gICAgICAyMSxcbiAgICAgIDIwMyxcbiAgICAgIDI0OCxcbiAgICAgIDE0MixcbiAgICAgIDYxLFxuICAgICAgMTAxLFxuICAgICAgMTg4LFxuICAgICAgMjAwLFxuICAgICAgMTYsXG4gICAgICAzNSxcbiAgICAgIDk0LFxuICAgICAgMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVNUVlMyVDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDA2OTQ4NDc6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3MDI2MTQ0NTg5NDIzNTo0OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMV2Y1S1FCRUw3TGhMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFkWGtVQ0xnVUhIRXY0WkZPbTVWNFNTSjdVc2dqYkpVamkrMVJzUnAxWGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMDJRc0Znays5SE1SV2g0L3NHU1dvUzZGUjhXVlpqMXhNU2JLVDJYVElhcVFSM2VTUkc4SHMyaStiWURjcjBSQ0x3WTBiNUFxZSsrUDZqRjhDbGRTQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSXRzMlhyalNkK3kzaDkzbStsbmxud2VqT2RoUFpMUmc5bmdKQWZSN2VxbXpGQzRJWHc0alRSYk9jRFp6dVYwTlE2N09DblUyRmY5anV6dDdvdll0QUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MDY5NDg0Nzo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NDE5OTA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQnEzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCcTMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyK0dpRm1UTUNIYTVBVXltTVN2R2ZHZXdXazBoUGI4ZUc0czNFV2xrdllnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0NTU3NTM0OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0NDE5OTExMTQ3XCJ9Igp9"  // PUT your SESSION_ID 


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
