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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_44_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQwLFxuICAgICAgICA1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgODYsXG4gICAgICAgIDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MixcbiAgICAgICAgMjA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg4LFxuICAgICAgICA0MixcbiAgICAgICAgMTcxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTksXG4gICAgICAgIDczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyOCxcbiAgICAgICAgMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInMvRzNwZmw0YXZPNFYxUGNBYUErL3hpeEV5UjljMUYxZDc4dzBPUDB6OVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkQxbGZMTEhGUXB5OU5xX091cXQxV2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGY1ODdkMGYtOTU2ZC00ZDIwLTg3M2UtYmQ0YzRmOWI1NTM1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDIzMSxcbiAgICAgIDEzOSxcbiAgICAgIDQyLFxuICAgICAgMTUyLFxuICAgICAgMTcyLFxuICAgICAgNTgsXG4gICAgICAxMzEsXG4gICAgICAxNzEsXG4gICAgICA2LFxuICAgICAgOCxcbiAgICAgIDI0OSxcbiAgICAgIDE1MSxcbiAgICAgIDAsXG4gICAgICAyNyxcbiAgICAgIDIzOCxcbiAgICAgIDI1MSxcbiAgICAgIDQ5LFxuICAgICAgODgsXG4gICAgICAxNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgMTIzLFxuICAgICAgNzUsXG4gICAgICA0MSxcbiAgICAgIDEyNCxcbiAgICAgIDEzNyxcbiAgICAgIDIwMixcbiAgICAgIDcxLFxuICAgICAgMTcsXG4gICAgICAxMzMsXG4gICAgICAyMDQsXG4gICAgICA4MCxcbiAgICAgIDE3NCxcbiAgICAgIDIxMyxcbiAgICAgIDIxNCxcbiAgICAgIDk2LFxuICAgICAgMTcsXG4gICAgICAxNzQsXG4gICAgICAyMzEsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDhUSktBV0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjU4MzY0NjI6OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NDIwMTAxMjE1MDMyOTo5MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLMmVsNXNCRU8vZHpyc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBObEdCTWl4RnVOWklZcTZWSWc1MmR3V0lSM3BOaTRuYXc4ZWwycDB0Z3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUDU3N2t0dlpzRmxqVUNpTXM3biswTGFrK1c2c0plRktjemtpMTVQamVZYnlyWGRrSkpXNDVqUldhQm9scU9QUWxuUmd1RjVuT2FScDlEZzkrcTZIQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYVFtY09aTmtCYzViVU53SUtYUll2MmtzZjRUYTF3M1ZjSTdyZ01PTm1Qc0dxaGRmUEZSUVprdVBKQXpNZVN3bEdnN3I2N3Z4MUo1dkdVditkOVpXaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNTgzNjQ2Mjo5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU2MzQ2NzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQMDVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAwNS5qc29uIjogIntcImtleURhdGFcIjpcIlpLK0NRenBKWFRKODdSM01yMGJHWEJUMGhwU3pLeWV1eHR1S3lDU2Zybmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzI1NDM5MjY4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
