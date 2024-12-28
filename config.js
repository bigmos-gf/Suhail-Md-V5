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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_11_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA3NixcbiAgICAgICAgMTYyLFxuICAgICAgICA0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODksXG4gICAgICAgIDE4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTExLFxuICAgICAgICA3NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4LFxuICAgICAgICA2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1LFxuICAgICAgICA4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDk2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMixcbiAgICAgICAgMTE5LFxuICAgICAgICAwLFxuICAgICAgICA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDY1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwLFxuICAgICAgICA0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM2LFxuICAgICAgICA1LFxuICAgICAgICAyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjksXG4gICAgICAgIDY1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MixcbiAgICAgICAgMTM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUY21GYjZqVjJzcmg5aGUwUlBlNjhNdHc3V1phSUZuU2FyclcrUk5Oc3hjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNNWNfTXloS1RjZWVILVUtbEF3aWtBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI5ZmY2M2ZkLWNmMTQtNGJjNS1iZTUyLTA0ZWQwNzFmNTE2NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDMsXG4gICAgICAzNSxcbiAgICAgIDE3MyxcbiAgICAgIDIyMSxcbiAgICAgIDExNyxcbiAgICAgIDEyNyxcbiAgICAgIDYsXG4gICAgICAxNDQsXG4gICAgICAxNzEsXG4gICAgICAxOTgsXG4gICAgICA2NixcbiAgICAgIDI0NyxcbiAgICAgIDYzLFxuICAgICAgMTA4LFxuICAgICAgMjE2LFxuICAgICAgMjIyLFxuICAgICAgMjIyLFxuICAgICAgMjUwLFxuICAgICAgMjQsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICAxODEsXG4gICAgICAyNTMsXG4gICAgICAyNDcsXG4gICAgICA3MCxcbiAgICAgIDIyMyxcbiAgICAgIDg2LFxuICAgICAgODEsXG4gICAgICAyOCxcbiAgICAgIDE1NixcbiAgICAgIDE3NyxcbiAgICAgIDY5LFxuICAgICAgNCxcbiAgICAgIDExMyxcbiAgICAgIDE0MyxcbiAgICAgIDI3LFxuICAgICAgMTY4LFxuICAgICAgMjA4LFxuICAgICAgODYsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU1RNSDNNTkRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjU4MzY0NjI6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NDIwMTAxMjE1MDMyOTo4OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLeWVsNXNCRU55Mndic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBObEdCTWl4RnVOWklZcTZWSWc1MmR3V0lSM3BOaTRuYXc4ZWwycDB0Z3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwianJPcDl4a1VRVWhMVnRUbUdWdmpjbWdRM0tkOCt3QVJoUm90dHhwRFRSU3FxN1JxRUllRHcwTmZQcDh1WGh4Qkl5eU5WSGpTYnFNZmtpMVI2VzVXQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWm5NdnpzK04yNC8xNHdVNlM4dGJhT25DNVZUV3BuZW53WnViUm9MdzR1UnFUZXFzaU96eHFHck95ZVlOY3V3Q2ZTd2xlWHBIbndDVVJ0Q2VOL20zQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNTgzNjQ2Mjo4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU0MTY2NzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQMDVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAwNS5qc29uIjogIntcImtleURhdGFcIjpcIlpLK0NRenBKWFRKODdSM01yMGJHWEJUMGhwU3pLeWV1eHR1S3lDU2Zybmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzI1NDM5MjY4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
