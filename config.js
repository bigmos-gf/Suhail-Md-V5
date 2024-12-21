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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_46_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzksXG4gICAgICAgIDMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxODgsXG4gICAgICAgIDYzLFxuICAgICAgICA0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyLFxuICAgICAgICA5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDYzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDUxLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMSxcbiAgICAgICAgODUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExLFxuICAgICAgICAwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA4MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjExLFxuICAgICAgICA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM2LFxuICAgICAgICA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NixcbiAgICAgICAgMTc5LFxuICAgICAgICA2NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5ZktqVjgvODNRLzNIOGVNYkRFVnRlM2thNUptWFVSQTBUVHVscERJM0dFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJObjhFQlJDTFFRR0JTWVlMWEtveXV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjI0N2M4NWU0LTMwYTYtNDFlMS1hMTc3LTllNzUwOTY1Y2I3OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICAyMzYsXG4gICAgICAxNzcsXG4gICAgICAxNzIsXG4gICAgICA1MixcbiAgICAgIDI2LFxuICAgICAgMjIxLFxuICAgICAgNjMsXG4gICAgICAyMzYsXG4gICAgICAxNzEsXG4gICAgICAxNzQsXG4gICAgICA5MSxcbiAgICAgIDYzLFxuICAgICAgMTYwLFxuICAgICAgMTI4LFxuICAgICAgNDksXG4gICAgICA0MyxcbiAgICAgIDIyOSxcbiAgICAgIDE4NSxcbiAgICAgIDE5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICAyMjcsXG4gICAgICAyMjcsXG4gICAgICAxMDEsXG4gICAgICAyNDMsXG4gICAgICAxMTIsXG4gICAgICA4OSxcbiAgICAgIDE2LFxuICAgICAgODcsXG4gICAgICA2MixcbiAgICAgIDU4LFxuICAgICAgOTQsXG4gICAgICAyMzMsXG4gICAgICAzMSxcbiAgICAgIDg1LFxuICAgICAgNixcbiAgICAgIDE3NSxcbiAgICAgIDEwNCxcbiAgICAgIDU5LFxuICAgICAgNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRllTRU1YSjlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjU4MzY0NjI6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NDIwMTAxMjE1MDMyOTo3N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLU2VsNXNCRUpYdW5Mc0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBObEdCTWl4RnVOWklZcTZWSWc1MmR3V0lSM3BOaTRuYXc4ZWwycDB0Z3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia0JVYXZHem1XbldYT0Z2VmNjWFZPdERvelEzU2U2Z0VIMHdBTUI1WFE0aG1rUzJTS2xwbDNORTlGd3NiMUVGZWEySEgrMmVzaWNIR09DR2RxUGdWQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM1BXYXZvNU5FL3ZocUFzSHB4WUhIK25NZXBrT0djcU5xNzZJeG1NandhMjc3cWJvbmE3MjBPSzJjR2dKUjVvby9rYnQybFVwcktjYlRmeis5cEJRRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNTgzNjQ2Mjo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ4MTc1NjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQMDVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAwNS5qc29uIjogIntcImtleURhdGFcIjpcIlpLK0NRenBKWFRKODdSM01yMGJHWEJUMGhwU3pLeWV1eHR1S3lDU2Zybmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzI1NDM5MjY4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ2MDQ1NTIwMzNcIn0iCn0="  // PUT your SESSION_ID 


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
