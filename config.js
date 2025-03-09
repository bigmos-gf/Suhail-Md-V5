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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_50_03_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgODAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgODMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkwLFxuICAgICAgICAyLFxuICAgICAgICA3NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDgwLFxuICAgICAgICA5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYwLFxuICAgICAgICA5NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU2LFxuICAgICAgICA0LFxuICAgICAgICA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk1LFxuICAgICAgICA3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDksXG4gICAgICAgIDk1LFxuICAgICAgICA3MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzksXG4gICAgICAgIDI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDgwLFxuICAgICAgICA0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhDNUhYWHJ0S0ZiODUwOXg2cFhQWEFrV2V5LzJISkRQVTRkYXJzZld6UFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1jcXJKbF9qUUlXTFk1SjlaRG9aYlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2JmN2M3MDItODEyMS00Y2UwLThlZGYtZGI5M2Y2MjY0NDFlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDEwNCxcbiAgICAgIDI0MyxcbiAgICAgIDM2LFxuICAgICAgMTkzLFxuICAgICAgMjEzLFxuICAgICAgMTI3LFxuICAgICAgMjIsXG4gICAgICA3MixcbiAgICAgIDc3LFxuICAgICAgOTksXG4gICAgICA1MixcbiAgICAgIDE0OSxcbiAgICAgIDIyMCxcbiAgICAgIDEwNSxcbiAgICAgIDE3NCxcbiAgICAgIDIxNSxcbiAgICAgIDY0LFxuICAgICAgMTYyLFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDE0MixcbiAgICAgIDgzLFxuICAgICAgMTg5LFxuICAgICAgNjgsXG4gICAgICAyMDUsXG4gICAgICAxNzcsXG4gICAgICA0NCxcbiAgICAgIDE1LFxuICAgICAgMTQ2LFxuICAgICAgNCxcbiAgICAgIDI0LFxuICAgICAgMTYwLFxuICAgICAgMTI4LFxuICAgICAgNjEsXG4gICAgICAyMjksXG4gICAgICAzMyxcbiAgICAgIDIyMyxcbiAgICAgIDIxLFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQxMTFIRUc5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI1ODM2NDYyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLjgJbwkoKd44CX8J2Vr/CdlorwnZaY8J2WmfCdlpfwnZaa8J2WiPCdlpnwnZaO8J2WlPCdlpPigKDwk4mz4LOE4L6AXCIsXG4gICAgXCJsaWRcIjogXCIxNjQyMDEwMTIxNTAzMjk6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPcUMxdndDRU12THM3NEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNNM1MwSDlNUWk4UEZ2cm05dHF5VmtiZG0yZ3BOVjM3bkJpMDZMeEk1Z3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZUZSQ1BtUnJPQ05sb3ZSVE9RQmZPdjJORHljK1FPY2NRUVlkdVc4NnlzYndzU2Z5d3R4eDN4L0VtWkdSRnV4MzBtOFFPc00rWTYyMUdZQWxoTXBQQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUHJweHliZEg4cGdhUjdJUkxUK0F0ekIrbU5zNlVVU01vVDZkeS9MUW5WdGxncmJPaDdwd0V6Q3VLbXA0VmJiMFR2VyttUE42YTRUZVRpTmUvSFVJQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNTgzNjQ2Mjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDE0ODE0MjJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
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
