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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2347025836462";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2347025836462";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347025836462,2347025836462";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "=SUHAIL_13_23_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDI2LFxuICAgICAgICA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNixcbiAgICAgICAgMTE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY0LFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM1LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkyLFxuICAgICAgICA4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxLFxuICAgICAgICAzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgNixcbiAgICAgICAgNTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjYsXG4gICAgICAgIDMyLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMixcbiAgICAgICAgNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTExLFxuICAgICAgICAzNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImhJN3J6ZVVzandPOXV4SkVkZ3V3dGgvdGc3ZHh4MHgwQzZ3cUN3VDlFelU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImEzanNSU3VWUUlhalhNMXo3dEQ5dGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGUxNTNmOWMtMWJlOS00MGQ0LTg3YjAtNGEzYmRmMzYxMzNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg0LFxuICAgICAgMjA4LFxuICAgICAgMTIsXG4gICAgICAxMzAsXG4gICAgICAyMjcsXG4gICAgICA2OCxcbiAgICAgIDU3LFxuICAgICAgMTU4LFxuICAgICAgMjM1LFxuICAgICAgOTMsXG4gICAgICAwLFxuICAgICAgMjgsXG4gICAgICA0NixcbiAgICAgIDE2MSxcbiAgICAgIDk4LFxuICAgICAgNTksXG4gICAgICAxOTUsXG4gICAgICAyNyxcbiAgICAgIDIwNyxcbiAgICAgIDE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDgzLFxuICAgICAgMTYwLFxuICAgICAgMjAyLFxuICAgICAgMTQzLFxuICAgICAgNDgsXG4gICAgICAxOTYsXG4gICAgICAxMCxcbiAgICAgIDg1LFxuICAgICAgMTksXG4gICAgICAxNDcsXG4gICAgICAyMjIsXG4gICAgICAyMzksXG4gICAgICAyMDksXG4gICAgICAyMjMsXG4gICAgICA1NSxcbiAgICAgIDEzOSxcbiAgICAgIDg1LFxuICAgICAgMjIsXG4gICAgICAyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZRDM4U01UQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAyNTgzNjQ2Mjo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY0MjAxMDEyMTUwMzI5OjY5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tHZWw1c0JFT0xxOExvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicE5sR0JNaXhGdU5aSVlxNlZJZzUyZHdXSVIzcE5pNG5hdzhlbDJwMHRncz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlVEZDQklXM3l4eGxkd3ZZU0doTWJTbXJtbUJHTnc4U2JQVndkSU9TR3EwOFdYcmJnY2Ura3JiSzBDU2xmdWxzRTA1R3BWOXY5c0J4Z3Fyb3ZiMW1BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaMnBNNW11M1AvVHNmTnZKYTFGN1ZkbExlTDM4WWROWUt1QlhHRlJoYzlwWFg0UG1XRGFza1A4Z25UN3g1RU4wK1pCaktGVk9UR0ZLMGt5ajN5ckloUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDI1ODM2NDYyOjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDA5NjIzMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=="  // PUT your SESSION_ID 


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
