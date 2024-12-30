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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_03_12_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyLFxuICAgICAgICA1OSxcbiAgICAgICAgMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDgyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEyLFxuICAgICAgICA2NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODksXG4gICAgICAgIDUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzLFxuICAgICAgICAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU4LFxuICAgICAgICA4NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDk5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1LFxuICAgICAgICAxMixcbiAgICAgICAgMjUwLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NixcbiAgICAgICAgNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY5LFxuICAgICAgICA3NixcbiAgICAgICAgOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDY4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImdXR29tRkUvS1ptQ09nRjZMNzNnZ1YvWkpyaFI2Z25nQmQwVDdBU0FiNmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzg1MTYxMTU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQzdBMTI2N0VFQUQ4NjVDQkM4QjAzRjBDODAwNkM4QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU1MTY5ODRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODUxNjExNTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgyMUU4Mzk1NkI2QzZGRTVCMTRERTc3NkMzRUQyMzRFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTUxNjk4NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1bWNIcXVvMlNmMlVfcC1TTzN6ZkNRXCIsXG4gIFwicGhvbmVJZFwiOiBcImVkZWM4OWRiLTQxNGUtNGFhNi1hZjlmLTVjOTBmOWYzY2YyOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OSxcbiAgICAgIDE2MixcbiAgICAgIDI1MyxcbiAgICAgIDI0LFxuICAgICAgMTU4LFxuICAgICAgMjE2LFxuICAgICAgMjksXG4gICAgICAzLFxuICAgICAgOTgsXG4gICAgICA0OSxcbiAgICAgIDMyLFxuICAgICAgMTkxLFxuICAgICAgMjE5LFxuICAgICAgMTA3LFxuICAgICAgNjEsXG4gICAgICAyMjcsXG4gICAgICAxMDMsXG4gICAgICAxMDMsXG4gICAgICAyNixcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc0LFxuICAgICAgMTMyLFxuICAgICAgMTM4LFxuICAgICAgMjU1LFxuICAgICAgNjksXG4gICAgICAyNDksXG4gICAgICA3LFxuICAgICAgMTE5LFxuICAgICAgMTM2LFxuICAgICAgMTE4LFxuICAgICAgMTksXG4gICAgICAxNzgsXG4gICAgICA0MSxcbiAgICAgIDE0LFxuICAgICAgMTgwLFxuICAgICAgNjIsXG4gICAgICAxNDQsXG4gICAgICA5MSxcbiAgICAgIDE3NyxcbiAgICAgIDYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpHRENTM1k1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3ODUxNjExNTU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ1OTMwMzk3ODEwNzIxOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi5LiozIjljJrkuYcgLiDkuILljankuKjljJrkuYcgLiDwn6eO4oCN4pmA77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWZNb0pjR0VMREd4N3NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaMTBNTk1rYXg1Sk5WQjkva2ZjL01ocnR5RTBIc1NzY3Z3aEE0YUN4R1NBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNrQkpJeWd5SDBVLzJaWkJkZWlMN05YUHdWRHA2R2lZMWtMbmsrZlVBZEVNV2JBZFRlL21oSEE2dmxXZjNFTk51WHJPK3Rmb0dQK0M2bkVGSXNvUERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxvb3dITDhXb0ZYYnJmS3BkZms1eXhueG5VdEx4UzBZSTlsd08yUFg5Vm5EK0NLUTRsdDNPUVlqQnNNWXJaLzU0V1lUQXhQejZwMGR4a1FjUFVEVUFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4NTE2MTE1NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTUxNjk4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9wWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3BZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOHdaOEt6S3V4Tjd5OVFNZG1aRnVRT3FzYytkOWdMd2szbWJEUmJISXFRbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjU5MzgxMzE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU1MTY5ODM1MTBcIn0iCn0="  // PUT your SESSION_ID 


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
