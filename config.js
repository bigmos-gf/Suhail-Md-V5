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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_46_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxOCxcbiAgICAgICAgNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk3LFxuICAgICAgICA4MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyLFxuICAgICAgICA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNixcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDk4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg0LFxuICAgICAgICA0LFxuICAgICAgICAxMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5LFxuICAgICAgICA0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDgwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQzLFxuICAgICAgICA4NixcbiAgICAgICAgMTE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA1MixcbiAgICAgICAgMjA2LFxuICAgICAgICA0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjR4Z0JNanZOeHNLT2krSzl0VGRWZ0FHWDBtTmhxV1ZUM2hodUY1Sno4cE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEyOTQ5NTE4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTY0ODUwRDkyOTJDNjUzRTYxODgxMjQxMjc3QTBGMkJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0NTA0MzcxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktHemRfMHJzUlNHMVBhS0hkcU5aUHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGMyZmNkOWYtMzhkZS00M2IxLWI0NWMtYWQ5NDJiYTI5MzAwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDI1MyxcbiAgICAgIDIyOSxcbiAgICAgIDEwNSxcbiAgICAgIDQxLFxuICAgICAgNjQsXG4gICAgICAyMjUsXG4gICAgICAyMDgsXG4gICAgICAxMixcbiAgICAgIDEzOSxcbiAgICAgIDI0LFxuICAgICAgMjksXG4gICAgICA0OSxcbiAgICAgIDIyMixcbiAgICAgIDE5OCxcbiAgICAgIDg3LFxuICAgICAgODQsXG4gICAgICAxOTEsXG4gICAgICAxODksXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMzYsXG4gICAgICAyNixcbiAgICAgIDEyOCxcbiAgICAgIDc0LFxuICAgICAgMjMyLFxuICAgICAgNzAsXG4gICAgICA2OCxcbiAgICAgIDIwMyxcbiAgICAgIDExMSxcbiAgICAgIDEzLFxuICAgICAgMTI5LFxuICAgICAgNTAsXG4gICAgICAzNSxcbiAgICAgIDE4MCxcbiAgICAgIDcsXG4gICAgICAxMTAsXG4gICAgICAyMjksXG4gICAgICAxMTUsXG4gICAgICAxNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQURQS1A2UVpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjk0OTUxODQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTYyMDg4MjQyNDIyMzE6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPZjhqTnNIRUtuZmlic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjBuczYwTHBIaFNVa0NaVjR0VUdzMHRDbUFwNk8ycmRHOEFjSU51a082M2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZUJ5bktydXI5MmZZSE13YTFWVGIvRXFncnpqc3plUmo1ZnQwQkU2S1I1OWFrSUZGaStIQXV2b3Q3TEZhdjI5SHN6aC9FeGhvUFZnR0NmemdSTEV6QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic3dNQUY0Z0VmdWFYQUVBQkFrVXpDeGJldmVDSnpiKzgvSTJ3TzBneitXYzBqOHVQU0NUSGtoenBxaDd3K3pXK1M5NHc1NXRUTVJTbFp3aTdQeHE4QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyOTQ5NTE4NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ1MDQzNjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEeHpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUR4ei5qc29uIjogIntcImtleURhdGFcIjpcInNUMisrRXB2OC9hakFQNXI2WjJsTXU2Rjg3V1lvYmgrUStla3NCODAvNGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA3MDEwMTYwNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0NTA0MzY3NjIxXCJ9Igp9"  // PUT your SESSION_ID 


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
