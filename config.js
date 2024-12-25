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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_09_12_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDgyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MixcbiAgICAgICAgODksXG4gICAgICAgIDcyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDg1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc2LFxuICAgICAgICA3NixcbiAgICAgICAgNjksXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDczLFxuICAgICAgICA3NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNixcbiAgICAgICAgMjE4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDg4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzLFxuICAgICAgICAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTExLFxuICAgICAgICA0NyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDY4LFxuICAgICAgICA2MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA1LFxuICAgICAgICA2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibDN6S3pVbW5taXJwZmpweUxTMUtEYnFKdHdKWndneEViejJlSVhQMW4yOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN3RoUlczdFRRXzZjOHByaVpfWmpRd1wiLFxuICBcInBob25lSWRcIjogXCJjNGU0ZTNlYy1kNTI0LTRkY2MtOTU1Zi04YjZmZTY0YTYyYjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAwLFxuICAgICAgMTE4LFxuICAgICAgMjI2LFxuICAgICAgMTAyLFxuICAgICAgMjIzLFxuICAgICAgMzYsXG4gICAgICAxMDAsXG4gICAgICA4LFxuICAgICAgMjQzLFxuICAgICAgNixcbiAgICAgIDE3MCxcbiAgICAgIDIzMixcbiAgICAgIDc3LFxuICAgICAgMTc5LFxuICAgICAgOTUsXG4gICAgICAxNyxcbiAgICAgIDIxOSxcbiAgICAgIDI0MyxcbiAgICAgIDE4OSxcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAxNDYsXG4gICAgICAyNDAsXG4gICAgICAxMzEsXG4gICAgICAxMjEsXG4gICAgICAxODAsXG4gICAgICAxNDEsXG4gICAgICAxOTIsXG4gICAgICAxNjksXG4gICAgICA3OCxcbiAgICAgIDAsXG4gICAgICA0MSxcbiAgICAgIDY1LFxuICAgICAgMTk1LFxuICAgICAgMjUsXG4gICAgICAxOTcsXG4gICAgICA1MSxcbiAgICAgIDIzNyxcbiAgICAgIDE3NyxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFLMUFMNkZUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQwNjk0ODQ3OjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzAyNjE0NDU4OTQyMzU6NjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHlFNjVFRkVNdjdycnNHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPRVdQUFBJazI2d2dzU1k5VWFNWmljTmZlUDBPUzN6bGxRMm1DOThaTmlZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFsNWtpQXladHdnQ29oN2xUOWJ6RnB3c29GS205enh0YWpwNGtnQkxiVXlvMWVrZm9GYjV6ZFp4MVo1ejhqNzdCc0JVOTNwQXZsTUs5aGNoMG5IWEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlpEdzNSNUpQT1BqWDZXcFYzNHpFeWtDdkZUajVMeW1FdjAxU1BLUjIvVmhXb1c0aFRJckpHQ0RtWEtPcEZGdDVxVm8wbml6cGV4USszY0tmMnRVOER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDA2OTQ4NDc6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MTE0MTkwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXRXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBdFcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXMGNpNG5XVUcrb04wRno5VXVhN2hVQWhYc0U4OTBvZU9BdE12OU0vSUlZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNzk1ODI1ODgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDk5MTQ0NjAwNVwifSIKfQ=="  // PUT your SESSION_ID 


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
