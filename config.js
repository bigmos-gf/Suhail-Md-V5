const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="amydollify@gmail.com"
global.location="Abj, Nigeria"


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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347025836462";




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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2347040694847";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347025836462,2347025836462";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  SUHAIL_19_47_01_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk4LFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDY4LFxuICAgICAgICA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDc4LFxuICAgICAgICAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1LFxuICAgICAgICA0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTG9YN09FOVRsVXk0T1pkc1I2WTZndVduTlQ0b3pabWZoNCtTQ2Z2YVhHZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidFIzY2VoTkpUWGlkaUN2NmhwVXVTUVwiLFxuICBcInBob25lSWRcIjogXCJlZWI0ZmU3ZS1hYTg4LTQ5NzItYjQ0OC0wZDAyOTFmNzljZmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk0LFxuICAgICAgOTAsXG4gICAgICAxMTMsXG4gICAgICAxMCxcbiAgICAgIDM3LFxuICAgICAgMTE1LFxuICAgICAgMjIsXG4gICAgICA1NixcbiAgICAgIDE1NyxcbiAgICAgIDc0LFxuICAgICAgMjUyLFxuICAgICAgMjI1LFxuICAgICAgNyxcbiAgICAgIDEyLFxuICAgICAgMjQ3LFxuICAgICAgNzgsXG4gICAgICAxNzMsXG4gICAgICAxNjUsXG4gICAgICAxMDMsXG4gICAgICA4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDQ0LFxuICAgICAgMTMxLFxuICAgICAgODcsXG4gICAgICA2OCxcbiAgICAgIDE4NixcbiAgICAgIDEzMCxcbiAgICAgIDM3LFxuICAgICAgOTksXG4gICAgICAyNTEsXG4gICAgICA2NyxcbiAgICAgIDEyNSxcbiAgICAgIDE2NixcbiAgICAgIDQ3LFxuICAgICAgNjAsXG4gICAgICAxMixcbiAgICAgIDEsXG4gICAgICA0NyxcbiAgICAgIDI5LFxuICAgICAgMTQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlE4MkVIQ1RQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3ODUxNjExNTU6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ1OTMwMzk3ODEwNzIxOjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWZNb0pjR0VNbVd4YndHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaMTBNTk1rYXg1Sk5WQjkva2ZjL01ocnR5RTBIc1NzY3Z3aEE0YUN4R1NBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFxOTY0bE5hbGtzUmZ1NzNKYzNhaStEcGdlMkFScVloOE9PU3VXZFlZUmhRZW5YMDVkVUpzRTFyaTBNWUdNM3QxbEFwNjJPMHcySWJwSm9XeXhLTUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktsVnF6YWZoNHMzOU84Z21sVDlGeGw0YmZqRVdlKy9ybys2WmI3VE53U3VZU3JVbHVDZnI3TUVZY0tlellQczR0YUFBYnpkekpaVTJSdCtRb1FSQmlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4NTE2MTE1NTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNzU3NTI0NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9wWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3BZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOHdaOEt6S3V4Tjd5OVFNZG1aRnVRT3FzYytkOWdMd2szbWJEUmJISXFRbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjU5MzgxMzE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 уσυ αℓℓ αяє ѕтυρι∂ вιт¢нєѕ 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • мυαн αмуу』*\n youtube.com/hailtechinfo0"),
 
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
