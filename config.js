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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_55_01_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDk1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTczLFxuICAgICAgICA1NixcbiAgICAgICAgMjExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDU4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAxNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUwLFxuICAgICAgICA1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk3LFxuICAgICAgICA5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzLFxuICAgICAgICA1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDM4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICA4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk41N2dxdjM5V3dPd2k5b0cya01rM1cweUxOYjlSdDljN0NuS2RySjkvMjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4MzE2MzM1MDMwOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTIxOURFNzE0RDAxRkI3MzNBNDAxM0YyREE0MENCRjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM3MTk0MTM4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4MzE2MzM1MDMwOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjlFNDk3M0ZFQzU2NjBCNTVCRjY1QzRFMDBDMUE3Q0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM3MTk0MTM4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBYSk5jUUtlVFMyazJrcVRnU0ItZ3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMThmMGM3YTAtZThjZC00YWRlLWFhNzctOWJjZDM0MzM0OTE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMjI3LFxuICAgICAgMTExLFxuICAgICAgMTg3LFxuICAgICAgODEsXG4gICAgICA4MyxcbiAgICAgIDM5LFxuICAgICAgMjUsXG4gICAgICAyMTgsXG4gICAgICAxMzUsXG4gICAgICAxODIsXG4gICAgICAxODksXG4gICAgICAxNjQsXG4gICAgICA2OCxcbiAgICAgIDIyNCxcbiAgICAgIDIyOCxcbiAgICAgIDE3NSxcbiAgICAgIDI0NCxcbiAgICAgIDEwNSxcbiAgICAgIDEzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICA1MSxcbiAgICAgIDI0LFxuICAgICAgODIsXG4gICAgICA3NyxcbiAgICAgIDIyLFxuICAgICAgMjQ5LFxuICAgICAgMzYsXG4gICAgICAyNDUsXG4gICAgICA0NyxcbiAgICAgIDI1NSxcbiAgICAgIDEzOSxcbiAgICAgIDE4MyxcbiAgICAgIDMwLFxuICAgICAgNjUsXG4gICAgICAxNzUsXG4gICAgICAyNDMsXG4gICAgICAxMTIsXG4gICAgICAxMzMsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzS1A0VkxLN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNjI4MzE2MzM1MDMwODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDg1MTI5MTkxNjMwMzM6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLinqrjgI7KnOG0nMqcLSDKmcmq4bSb4bSEypwuISEhLsqA4bSH4bSF44CP4pW+4pW84p+s4pqnXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjY0emFVSEVKTDFyYndHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtS0plMlpIdmJHR3RsMnlWV3RGVTB2Qks3YnU5YWxXMDFaaVJQQXlSZEZVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNDdHFLL3N4TVZhbEJuN1lHREtZN2tqeTRHWmc2UkFXYmRZcmI3R3JkZWowUHFXVUNLYVM0VkR2a21HQVdVMDd0aXd1ZnhqeDVybEFmR3FWVlk0d0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFNaHpEdFlvZnBoaXJWa2VjNmdZMjk1ZDMzcDAvZzhnS0FXaVJQK20vdlNCZEh2YnZVMDEzbXVQSWtOeWVBTnhvL2t2VzZsTy8rMWNobWhCL2pKbmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjYyODMxNjMzNTAzMDg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNzE5NDEzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1Ra1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVFrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQkpFNEdXYmVjSGhqOGU3cUhOUXFUNWFobW9RZE5mcEh5MjkrMlo0b1VMWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTU3OTExNjQ2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzcxMjk0NDI4MTRcIn0iCn0="  // PUT your SESSION_ID 


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
