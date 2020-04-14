function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5bfnxQBB6VF":
        Script1();
        break;
      case "5iJVjDRFGRz":
        Script2();
        break;
  }
}

function Script1()
{
  //get the date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() +1;
var yyyy = today.getFullYear();
if(dd<10) {
dd = "0"+dd;
}
if(mm<10) {
mm="0"+mm;
}

//get the SL variables
var player = GetPlayer();

var js_Q01_Name = player.GetVar("00_Q01_Name");
var js_Q02_Workstation = player.GetVar("00_Q02_Workstation");
var js_Q03_Hours = player.GetVar("00_Q03_Hours");
var js_Q04A_Portable = player.GetVar("00_Q04A_Portable");
var js_Q04B_Hours = player.GetVar("00_Q04B_Hours");

var js_Q1_1 = player.GetVar("00_Q1_1");
var js_Q1_2 = player.GetVar("00_Q1_2");
var js_Q1_3 = player.GetVar("00_Q1_3");
var js_Q1_4 = player.GetVar("00_Q1_4");
var js_Q1_5 = player.GetVar("00_Q1_5");
//var js_Q1_6 = player.GetVar("00_Q1_6");
//var js_Q1_7 = player.GetVar("00_Q1_7");

var js_Q2_1 = player.GetVar("00_Q2_1");
var js_Q2_2 = player.GetVar("00_Q2_2");
var js_Q2_3 = player.GetVar("00_Q2_3");
var js_Q2_4 = player.GetVar("00_Q2_4");
//var js_Q2_5 = player.GetVar("00_Q2_5");
//var js_Q2_6 = player.GetVar("00_Q2_6");

var js_Q3_1 = player.GetVar("00_Q3_1");
var js_Q3_2 = player.GetVar("00_Q3_2");
var js_Q3_3 = player.GetVar("00_Q3_3");
//var js_Q3_4 = player.GetVar("00_Q3_4");

var js_Q4_1 = player.GetVar("00_Q4_1");
var js_Q4_2 = player.GetVar("00_Q4_2");
var js_Q4_3 = player.GetVar("00_Q4_3");
var js_Q4_4 = player.GetVar("00_Q4_4");
var js_Q4_5 = player.GetVar("00_Q4_5");
var js_Q4_6 = player.GetVar("00_Q4_6");
//var js_Q4_7 = player.GetVar("00_Q4_7");
//var js_Q4_8 = player.GetVar("00_Q4_8");
//var js_Q4_9 = player.GetVar("00_Q4_9");

var js_Q5_1 = player.GetVar("00_Q5_1");
//var js_Q5_2 = player.GetVar("00_Q5_2");
//var js_Q5_3 = player.GetVar("00_Q5_3");

var js_Q6_1 = player.GetVar("00_Q6_1");
var js_Q6_2 = player.GetVar("00_Q6_2");
//var js_Q6_3 = player.GetVar("00_Q6_3");
//var js_Q6_4 = player.GetVar("00_Q6_4");

//link to hard copy of form
var js_linkToForm = "https://team.sp.jlrint.com/sites/safety/default.aspx";

//write the page that will be printed, as a string.
//Create variable to contain page content
var pageContent = "";

//Create variable for logo Data URI 
var jlrLogo ='<center><br><img src="data:image/gif;base64,R0lGODlhtAAqANU/AOjn6oyQj9fY2250csfIygBSJ7e4uwBsSKepqkOhiACOa/77/kBQTABnNfPz9AAkAwA2Hfzr9JKrpfHd58LExQAEACktK//1/UdzZwBFEaHIvdLT1LGztuHj5N3d32iumszNz+3s7x9mVefV3gBKNuDN176+wM3AyK2vsPb29/vj75yeoLyvt8vk3ca4wO/v8tPJz+L08JC8r7rTzbanrqOjpfn5+peYmf3w+XqBgFdZWRYZF2JlZD5BP////wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjNCRDM4NUJFNkY3MTFFNkE2NDk4MkU2MTVBRTRENzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjNCRDM4NUNFNkY3MTFFNkE2NDk4MkU2MTVBRTRENzkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyM0JEMzg1OUU2RjcxMUU2QTY0OTgyRTYxNUFFNEQ3OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyM0JEMzg1QUU2RjcxMUU2QTY0OTgyRTYxNUFFNEQ3OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAD8ALAAAAAC0ACoAAAb/wJ9wSCwaj8ikcslsOp/LUIfAQSFWt+xthUAZCJsQdEwum89otMNQu5kIntArBAB0PHiBR8DX8zcEJlUmAAtph4iJimQdKxwgKSl0KT4+ERMmNQE5AxiengM5ATQGJSpSGxsCdwQGJimLRQAgVjU1CCaGsbu8RB03CB0LKQCVCzAoOSIkEA/Oz9DPECQiOTUlEyF8HR0CBgKwiigeFBQCHB0bVSsBHAYIXQ6982cCKwQ+ISGWJhjPBQ0SzGhRyYcNHBFUTJigQgUOHMQ0fFDQIIMzEhhcLLggwA4FAvLSGLCgwwcPCzl6DDCmzcSNAG4I1OBAr+aSBQEo5KN0Q0SF/wcNPhhLdiBDswwZCgBswLSBUqRGC5DI4WLCAg0JGjjDMIKjAHUd0Ojo8cKHiZQ9LODzseAFAG/uQKTjosumXSE3KJXFgeHnAYI+UAywmLSp4cOInUYdUIIYxQoFBrwlQIsmGQQOfASwwDktixs7dAQz9sKtiQ0ONpgwwWbD3XkpULzI7KPvgwSVAlhMzLs37wIQRATwIUPBAwgDQqxGAWKMBx8DfrBAcQNtDwY7KgToWNAHORuBDKBYUQPEl9eKbNSwEcLGiAcVFFQiUdi3/fuHgYuI8KFBhQEwGFCFa04wMIAFQlixwgoG0BCADhbscIIANrCVggMg2AACa1W8xP8BASiEhV4aN6DmAw4PZCBfDoU9tZRhSr1YUQEZNNVijEr5lgEJE0TgHwQjcMBBDU8scEN0HuSQAwMu3HEDD0taEIABG3TgQB3PEcNHK0O2AwIHL4xYBgI2AHCBMxo4gEGNTBWAmw8uINZWBBi0aZAPIgBUSQ4aVFhJCgrICKNSDwwwQl85BMnBDVDcwgMSO/QQaQA1gATAPt1154AAWZiDAAFiNkGBbD4YUIEGPrAJowwOTEDCqh5wM4CdciCQgQz7PLDBAsV4V2piAOVYwAM8wueCK4w6YcEAKBTxAgUe8FBdaDcYAMAckaRgAzF20ObBJgiE4AGRoSqBAnsrVHD/QG2CMjVbDao2IB8dAOTQ1AIOOHBCBi3kukAIauYgRwmD4ojjAzl8AMEOHrgS5pgEvJDCAm0B4AEBEdvgwAubBEDekCsoGcBzCyAQQDs2rFKuEStcecNtGsRrGKo+vGqjDy/kYsMKTGlQ2gsXkFAJAg3gAEAAFV3wQpwKtJDKDDMAUKfBRpXQzHKWQWFCJQzwoAMDPfTAA4N6fLnDDpxZEHaEakuqVgoebGiCDVasLISV3j3gwwftMpWBDx1cIKMG+1TgQwocVLSnD5u+MEIBMhSS1AGB12kmHXcE8IDBMT4AA3yzEFCXE/vkwEPHAZyEtg4DHMiD12mx3QPrqUeY/5m4IGQIgAF2o7APAwdwANRvNnQAg2F/A63AtiY4VYkIKcwWwgoPxFDM5h944GoBKpRggDk+MABBjMwAB0EzBjyQkwAUQAGCAAToQEQICAxQAw1HDqADKVXQcAsNLBASdcayg5VQTA4C8AEBAhCqb4TAAnpLSt8CoodXASQDH+iAn/QBgwwkwAE0eIDPypKUCrEAcj4AAA8KgxsU+INz4zMfBHKwgAqEAAQIGEMOAKAEDiCAdwsAQQ50oAMehIIFugDADcK2gxvowwET08F2fFCD0dmEAteqwAfq064CeGADINBHBGiggWGc7wHRG8EBKvQqBeTLB7dxS2bqcIEaUf8AA+dzisFieL4+VmAZOcBBHOymP+xc6QXbIgDaQLCAGoTDLlUyQAZesLkcISYDEUgFHzzAAMClyikLwIEK3lQj+SygBAXQwIXe6AMdMKV8eoThjmTYjBswgBvNsdvsrsMNG+DrLJLigQ0QQC56wE0APEgAACRoScMcgBoiiKYIDhBNmzVAmtJsSjUPgAFs7iZYsYzRNHZ0Plo2AwAVkIAHcmi3H8BuBwk0iAlqUYMBoKMD7ZvHWwRAAhPIgJmWbGZ+giUjS7LpKTaiUUWgYhSk9PGM44voQ5vRgQrkQAAMbGe0YLeBshjkYu/bgAdeUcxd7JMEBpABjWLUlKUUNAH/MoipDBLwogNooAUt+MABGtACDcwgWD5twQFmoIGiFpUCIpBpTA9wPmZMtBkTsChG2ykEDmxCSa/7WhHHEoCyjMVIJiBCANiphtxJUQBI4RyOMnCAf6ooVnboQKowaANEbixVz0kVQP6FNA8AYJXQOQAOrCQFB5DgOE+FQAVUUIEVjIuqQggMpa7wEiWJYolbA4EOcoACB5AnBBzgAQ/T8D4UQEAAx5HlBwSgAjxe0wEdWJMyX0CCFlBsAFNxSw5mQDEIZMABucqFD6ZBgsNyh1gwiC1iJ+oMCfSgDqCC7N3E4wUCFOMHAhjACixQCRQQsTwgqMFYEEGADqDzZcBR/8r42KqBEVCvkkJJQYowcL0UwhEpxMAAb+uoNx+UAI2Fc4ZFdlKB03qgB8t9aAV0MJUFdEAM0m1CDtTmAw4AoAacCIANEmECAYQgOwtIMARmoAIQxGGMxxksAER6IRwUQAqzclMcSKCBC9Qwgy5I0WCfcwE4FsBiYOgACBwAmcQOoIYaKmmElzCAzRQxl7EwwD56QAIZFPiMOBDACLYcgRhOYAMXEOkLqKdO+QLHAc95gAxsnINKQGa1ArDFChjwgBXIBZ9w2EFi0VeBG5iDd0tuQgpy8JIAhHUXePNABXDSxwIw4NEiYIAIxoeB3AUgHSg4jgw8EOJmXODBD5BAmf9mIIcUgaCjP/kJCUBAgOrMk86JrcDnbLihDQf6CY/kBQLckq4BSEDEMTQKBQygaIy951aqkIEGsnyBHmRgOHd4gZ4fEILwuIIEEhjBBo5zAhgM4KnHEcDCAkHMWy/ZALyuAAkWIAJgn48yuhnAF/sorlWEoIZGaTMiT9AMDGCMAOUYQQUmYIAcP2CeOe4jfHLwawt0YDWjNbd0hy1XDlSAA3AUMbEoJb4D4A/WOSiFAEAgvvNxxQUw0MGwPLYg8rwMf9+GwMmo50cSXKACFVCNECV+aw58EZ3pbIFP9txHozzUGURPOrib0QyLvqAvK3jWWZjwgtw9iggfoUCyiPD/AoCzZjVgz6cNKOBzI7AG0EJYwBuGZIQpvQMe8FhBJgiUiHuAWdF/rA18mK70iEblfH/vu8L3joPhVsACOKDABqrYBBvE6uqR7YC1PBCSIaQCjF+5/AbyCds9GMEOUP6BCTxwgz3k+gcXvQM3uKGakS5imHGbAs47SdufCP72SofPAzopAcXu0MRUcIKGNpCDIXQjrOmgwAqGMHLKKyEFpxaAEUYe3R+oRvo3AIFOiJADyth6CN2vviJewAE+5Msn/6nEAHTfDKTjnrnuh08FGBCABRhg6DQ08aig4ABRWEaFzSIEBCAK0YVh0VEEIfASsGADA8ADIkIEr0MuLwB5/z9AAA2IdvXTOkakJBoofovgA46VDgvgAegHAVLGMXiEc9EAUdDQfsfhDCpYQC+AL+12eEf2Fg5gMowgCgF4ga6wGpxwgGcxAN93N0YUJiahA3QXWUTULD4wRCDyPQaQVUPwJKdzAzUgNmNjRbGwMyaQDh2QAgHAACp4UbMQABgAQfKngj+he6mGcwU2FRRSKjkAhxiwDx0gMZ/CBABXDh9RP0b0A5pxZNkSCREQCjwQJq9jPybgh8mQAyIShCAgMTnTgM2yAEV0OIWIA6wjPz/QOkQ4BCywgRBGD4v3CB8BADBQA2QIhzvAAP53AgQgixgDAzCgBx6gAhbDAaaTHcA4RwIDsAGVUAhmsQIPuARxxQ1+VRcEAANJAAMrNgSCxA11YF7CMASfxgZb4ALCKAQbEHFFkBp+9QP15gNFYI3gSA+k5wgCwgEUwGqagAE90HRwWI/2SCxQgm6VQAcLkEIzUYo8F5Bl4AELUgMocJAIwAEmcAKCwA6ckFUisIg8OHoVQgx5yBYbsCDpKJAcWQYvwAYwsQISAA8HKSQG4ArlQBmqUAeYQwu2AA4dGZO8YDFkR1lakAXk8UPQwoWHEAQAOw=="></center><br>';

//Add logo to top of page
pageContent += jlrLogo;

//Add title
pageContent += "<div style='font-family:sans-serif'><h2><strong><center>Display Screen Equipment (DSE) JLR Workforce Assessment Questionnaire</center></strong></h2><br>";

//Suggestion to save or print and the print button.
pageContent+= "<b>Save or print this document to discuss with your manager.<br><a href='javascript:window.print();'>Click here to print or save the document</a> Select 'right-click > print' if you have problems.</b><br />(You can choose the 'Save as PDF' option from the print menu to save the document.)";

//Add table for user to add their details
pageContent += "<br><table><tr><td>Name</td><td>"+js_Q01_Name+"</td></tr><tr><td>Workstation location or Smart working</td><td>"+js_Q02_Workstation+"</td></tr><tr><td>On average how many hours per day do you use the DSE equipment?</td><td>"+js_Q03_Hours+" Hours</td></tr><tr><td>Do you work from home on a portable DSE? If yes, for what regular period of time?</td><td>"+js_Q04A_Portable+", "+js_Q04B_Hours+" Hours</td></tr><tr><td>Date of Assessment</td><td>" + dd+"/"+mm+"/"+yyyy+"</td></tr><tr><td>Date returned for review to Line Manager / DSE Assessor</td><td></td></tr></table><br>";

//Add table for line manager/DSE Assessor to complete
pageContent += "<table><tr><td>Date of Work Station Review with Assessor (if needed)</td><td></td></tr><tr><td>Signature of Assessor</td><td></td></tr><tr><td>Name of Assessor</td><td></td></tr></table><br><br><br>"

//Add instructions/declaration
pageContent += "<p><center><b><u>Workstation Assessment Instructions</u></center></p><ol><p><li>Before completing this checklist you should read JLR-SP-038C</p><p>I (User/Operator) have read and understood the information provided in JLR-SP-038C and modified my workstation in line with the guidance provided</p><p>Signed:______________________________________     Date:______________________</li></p><p><li>Work through the questions answering Yes, No or Not Applicable (N/A) for each risk factor.</li></p><p><li>Once completed return this form to your line manager within two weeks of the completion date where reasonably practicable.</b></li></p></ol><br><br>";

//Add table containing user input data from DSE Assessment questionnaire
pageContent += "<table><tr><th>Risk Factor</th><th>Yes / No / N/A ?</th><th>Comments/Further Information</th></tr><tr><td><b>WORK CHAIR</b></td><td></td><td></td></tr><tr><td>Is it height adjustable?</td><td>"+js_Q1_1+"</td><td></td></tr><tr><td>With the seat adjusted to the correct height can you rest your feet comfortably on the floor or footrest?</td><td>"+js_Q1_2+"</td><td></td></tr><tr><td>Does the backrest support your back?</td><td>"+js_Q1_3+"</td><td></td></tr><tr><td>Does the seat base support your legs?</td><td>"+js_Q1_4+"</td><td></td></tr><td>Are you able to adopt a comfortable position?</td><td>"+js_Q1_5+"</td><td></td></tr><tr><td><b>KEYBOARD / INPUT DEVICES</b></td><td></td><td></td></tr><td>Are there a keyboard and mouse separate from the screen?</td><td>"+js_Q2_1+"</td><td></td></tr><td>Can you adopt a comfortable position with your hands and arms when using the keyboard and mouse or other input device?</td><td>"+js_Q2_2+"</td><td></td></tr><td>If you require it, can you read the keys on the keyboard easily?</td><td>"+js_Q2_3+"</td><td></td></tr><td>Does the input device work and move smoothly?</td><td>"+js_Q2_4+"</td><td></td></tr><tr><td><b>WORK DESK / SURFACE</b></td><td></td><td></td></tr><td>Is the area large enough for all work equipment and other work related items?</td><td>"+js_Q3_1+"</td><td></td></tr><td>Can you comfortably reach all the work related equipment?</td><td>"+js_Q3_2+"</td><td></td></tr><td>Is there adequate legroom and clearance under the desktop?</td><td>"+js_Q3_3+"</td><td></td></tr><tr><td><b>DISPLAY SCREEN EQUIPMENT</b></td><td></td><td></td></tr><td>Is the information on the screen easy to read?</td><td>"+js_Q4_1+"</td><td></td></tr><td>Can the brightness and contrast be adjusted?</td><td>"+js_Q4_2+"</td><td></td></tr><td>Can you adjust the height of the screen to approximately eye level?</td><td>"+js_Q4_3+"</td><td></td></tr><td>Is the screen free of reflections/glare?</td><td>"+js_Q4_4+"</td><td></td></tr><td>Is the screen directly in front of you when seated at your workstation?</td><td>"+js_Q4_5+"</td><td></td></tr><td>If you have more than one computer screen on your desk, are they all at approximately the same height?</td><td>"+js_Q4_6+"</td><td></td></tr><tr><td><b>ENVIRONMENT</b></td><td></td><td></td></tr><td>Does the work environment allow you to work comfortably? If no, please give details.</td><td>"+js_Q5_1+"</td><td></td></tr><tr><td><b>OTHER</b></td><td></td><td></td></tr><tr><td>Do you move from your seat at least once an hour?</td><td>"+js_Q6_1+"</td><td></td></tr><td>Do you feel you have received adequate training in the use of the software you are required to use?</td><td>"+js_Q6_2+"</td><td></td></tr></table><br><br>";

//Add section about typing style, eyetests etc.
pageContent += "<p><b>Which best describes your typing style?</b></p><p><li>Touch Typist (don't need to look at the keys, only at the screen) &#9744</li></p><p><li>Multifinger (use several fingers but look mainly at the keyboard, occasionally at the screen) &#9744</li></p><p><li>Hunt and Peck (type using only one finger or two fingers and check the screen regularly) &#9744</li></p><br><br>";


//Add table - regarding any concerns
pageContent += "<table><tr><th></th><th>Yes/No</th><th>If Yes, please provide further details</th></tr><tr><td>Are there any concerns with the DSE workstation that have not been covered in the checklist?</td><td>Y / N</td><td></td></tr><tr><td>Have you experienced any discomfort or symptoms which you think may be attributed to work at this DSE workstation?</td><td>Y / N</td><td></td></tr></table><br>";

//Add table to be completed by line manager
pageContent += "<table><tr><th>To be completed by Line Manager</th><th></th></tr><tr><td>Name</td><td></td></tr><tr><td>Signature</td><td></td></tr><tr><td>CDSID</td><td></td></tr><tr><td>Date</td><td></td></tr><tr><td>Any Further Action Required?</td><td>Yes / No</td></tr></table>"

//Add words about sight test voucher
pageContent += "<p>This form can be used to get an eye sight test voucher. <b>This provision is not applicable for agency staff or contractors.</b> If this is required, please complete the boxes below and email or send this form to Occupational Health. The voucher will only be made available if your manager has reviewed and signed the boxes above. This is centrally funded.<br><br>If you require glasses for use with DSE equipment and do not use them for any other general activities, these may be purchased by the company. This will be discussed with you after your eye test has been completed by the provider.</p>"

//Add table about sight test voucher
pageContent += "<table><tr><th>Eye sight test request</th><th></th></tr><tr><td>Name</td><td></td></tr><tr><td>Payroll number</td><td></td></tr><tr><td>Department/Function</td><td></td></tr></table><br>"

//Add Action List
pageContent += "<table><tr><th>Action List</th><th></th><th>Completed Date</th></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table><br>"

//Add final table for follow up assessments
pageContent += "<table><tr><th>Follow up assessments</th><th></th><th></th></tr><tr><th>Name</th><th>Date</th><th>Comment</th></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>"

// closing the font style/body
pageContent+="</div>";

// open the window, and populate it.
myPrintPop=window.open('', 'myPopup', 'width=500, height=600');

//overwrite the popup - 1st arg = CSS stylesheet (myStyles.css) in Data URI format, 2nd arg = pageContent var.
myPrintPop.document.write('<head><link rel="stylesheet" href="data:text/plain;base64,77u/dGFibGUsIHRoLCB0ZCB7DQoJYm9yZGVyLXN0eWxlOiBzb2xpZDsNCglib3JkZXI6IDFweCBzb2xpZCBibGFjazsNCglib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOw0KCQ0KCX0NCg0KdGFibGUgew0KCXRhYmxlLWxheW91dDogZml4ZWQ7DQoJd2lkdGg6IDEwMCUNCg0KfQ0KDQp0aCB7DQoJcGFkZGluZzogNXB4Ow0KCXRleHQtYWxpZ246IGxlZnQ7DQoJaGVpZ2h0OiAxNXB4Ow0KCXdpZHRoOiAxMDAlOw0KCXBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDsNCg0KfQ0KDQp0ZCB7DQoJcGFkZGluZzogNXB4Ow0KCXRleHQtYWxpZ246IGxlZnQ7DQoJaGVpZ2h0OiA0NnB4Ow0KCXdpZHRoOiAxMDAlOw0KCXBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDsNCg0KfQ0KDQp0aCB7DQoJYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMg0KDQp9DQoJDQpib2R5IHtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTt9DQoNCi5yZWQgew0KCWNvbG9yOiByZWQ7DQp9DQoNCg=="></head>', pageContent);

myPrintPop.title="Display Sreeen Equipment User/Operator Assessment Questionnaire";
}

function Script2()
{
  //get the date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() +1;
var yyyy = today.getFullYear();
if(dd<10) {
dd = "0"+dd;
}
if(mm<10) {
mm="0"+mm;
}

//get the SL variables
var player = GetPlayer();

var js_Q01_Name = player.GetVar("00_Q01_Name");
var js_Q02_Workstation = player.GetVar("00_Q02_Workstation");
var js_Q03_Hours = player.GetVar("00_Q03_Hours");
var js_Q04A_Portable = player.GetVar("00_Q04A_Portable");
var js_Q04B_Hours = player.GetVar("00_Q04B_Hours");

var js_Q1_1 = player.GetVar("00_Q1_1");
var js_Q1_2 = player.GetVar("00_Q1_2");
var js_Q1_3 = player.GetVar("00_Q1_3");
var js_Q1_4 = player.GetVar("00_Q1_4");
var js_Q1_5 = player.GetVar("00_Q1_5");
//var js_Q1_6 = player.GetVar("00_Q1_6");
//var js_Q1_7 = player.GetVar("00_Q1_7");

var js_Q2_1 = player.GetVar("00_Q2_1");
var js_Q2_2 = player.GetVar("00_Q2_2");
var js_Q2_3 = player.GetVar("00_Q2_3");
var js_Q2_4 = player.GetVar("00_Q2_4");
//var js_Q2_5 = player.GetVar("00_Q2_5");
//var js_Q2_6 = player.GetVar("00_Q2_6");

var js_Q3_1 = player.GetVar("00_Q3_1");
var js_Q3_2 = player.GetVar("00_Q3_2");
var js_Q3_3 = player.GetVar("00_Q3_3");
//var js_Q3_4 = player.GetVar("00_Q3_4");

var js_Q4_1 = player.GetVar("00_Q4_1");
var js_Q4_2 = player.GetVar("00_Q4_2");
var js_Q4_3 = player.GetVar("00_Q4_3");
var js_Q4_4 = player.GetVar("00_Q4_4");
var js_Q4_5 = player.GetVar("00_Q4_5");
var js_Q4_6 = player.GetVar("00_Q4_6");
//var js_Q4_7 = player.GetVar("00_Q4_7");
//var js_Q4_8 = player.GetVar("00_Q4_8");
//var js_Q4_9 = player.GetVar("00_Q4_9");

var js_Q5_1 = player.GetVar("00_Q5_1");
//var js_Q5_2 = player.GetVar("00_Q5_2");
//var js_Q5_3 = player.GetVar("00_Q5_3");

var js_Q6_1 = player.GetVar("00_Q6_1");
var js_Q6_2 = player.GetVar("00_Q6_2");
//var js_Q6_3 = player.GetVar("00_Q6_3");
//var js_Q6_4 = player.GetVar("00_Q6_4");

//link to hard copy of form
var js_linkToForm = "https://team.sp.jlrint.com/sites/safety/default.aspx";

//write the page that will be printed, as a string.
//Create variable to contain page content
var pageContent = "";

//Create variable for logo Data URI 
var jlrLogo ='<center><br><img src="data:image/gif;base64,R0lGODlhtAAqANU/AOjn6oyQj9fY2250csfIygBSJ7e4uwBsSKepqkOhiACOa/77/kBQTABnNfPz9AAkAwA2Hfzr9JKrpfHd58LExQAEACktK//1/UdzZwBFEaHIvdLT1LGztuHj5N3d32iumszNz+3s7x9mVefV3gBKNuDN176+wM3AyK2vsPb29/vj75yeoLyvt8vk3ca4wO/v8tPJz+L08JC8r7rTzbanrqOjpfn5+peYmf3w+XqBgFdZWRYZF2JlZD5BP////wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjNCRDM4NUJFNkY3MTFFNkE2NDk4MkU2MTVBRTRENzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjNCRDM4NUNFNkY3MTFFNkE2NDk4MkU2MTVBRTRENzkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyM0JEMzg1OUU2RjcxMUU2QTY0OTgyRTYxNUFFNEQ3OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1w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"></center><br>';

//Add logo to top of page
pageContent += jlrLogo;

//Add title
pageContent += "<div style='font-family:sans-serif'><h2><strong><center>Display Screen Equipment (DSE) JLR Workforce Assessment Questionnaire</center></strong></h2><br>";

//Suggestion to save or print and the print button.
pageContent+= "<b>Save or print this document to discuss with your manager.<br><a href='javascript:window.print();'>Click here to print or save the document</a> Select 'right-click > print' if you have problems.</b><br />(You can choose the 'Save as PDF' option from the print menu to save the document.)";

//Add table for user to add their details
pageContent += "<br><table><tr><td>Name</td><td>"+js_Q01_Name+"</td></tr><tr><td>Workstation location or Smart working</td><td>"+js_Q02_Workstation+"</td></tr><tr><td>On average how many hours per day do you use the DSE equipment?</td><td>"+js_Q03_Hours+" Hours</td></tr><tr><td>Do you work from home on a portable DSE? If yes, for what regular period of time?</td><td>"+js_Q04A_Portable+", "+js_Q04B_Hours+" Hours</td></tr><tr><td>Date of Assessment</td><td>" + dd+"/"+mm+"/"+yyyy+"</td></tr><tr><td>Date returned for review to Line Manager / DSE Assessor</td><td></td></tr></table><br>";

//Add table for line manager/DSE Assessor to complete
pageContent += "<table><tr><td>Date of Work Station Review with Assessor (if needed)</td><td></td></tr><tr><td>Signature of Assessor</td><td></td></tr><tr><td>Name of Assessor</td><td></td></tr></table><br><br><br>"

//Add instructions/declaration
pageContent += "<p><center><b><u>Workstation Assessment Instructions</u></center></p><ol><p><li>Before completing this checklist you should read JLR-SP-038C</p><p>I (User/Operator) have read and understood the information provided in JLR-SP-038C and modified my workstation in line with the guidance provided</p><p>Signed:______________________________________     Date:______________________</li></p><p><li>Work through the questions answering Yes, No or Not Applicable (N/A) for each risk factor.</li></p><p><li>Once completed return this form to your line manager within two weeks of the completion date where reasonably practicable.</b></li></p></ol><br><br>";

//Add table containing user input data from DSE Assessment questionnaire
pageContent += "<table><tr><th>Risk Factor</th><th>Yes / No / N/A ?</th><th>Comments/Further Information</th></tr><tr><td><b>WORK CHAIR</b></td><td></td><td></td></tr><tr><td>Is it height adjustable?</td><td>"+js_Q1_1+"</td><td></td></tr><tr><td>With the seat adjusted to the correct height can you rest your feet comfortably on the floor or footrest?</td><td>"+js_Q1_2+"</td><td></td></tr><tr><td>Does the backrest support your back?</td><td>"+js_Q1_3+"</td><td></td></tr><tr><td>Does the seat base support your legs?</td><td>"+js_Q1_4+"</td><td></td></tr><td>Are you able to adopt a comfortable position?</td><td>"+js_Q1_5+"</td><td></td></tr><tr><td><b>KEYBOARD / INPUT DEVICES</b></td><td></td><td></td></tr><td>Are there a keyboard and mouse separate from the screen?</td><td>"+js_Q2_1+"</td><td></td></tr><td>Can you adopt a comfortable position with your hands and arms when using the keyboard and mouse or other input device?</td><td>"+js_Q2_2+"</td><td></td></tr><td>If you require it, can you read the keys on the keyboard easily?</td><td>"+js_Q2_3+"</td><td></td></tr><td>Does the input device work and move smoothly?</td><td>"+js_Q2_4+"</td><td></td></tr><tr><td><b>WORK DESK / SURFACE</b></td><td></td><td></td></tr><td>Is the area large enough for all work equipment and other work related items?</td><td>"+js_Q3_1+"</td><td></td></tr><td>Can you comfortably reach all the work related equipment?</td><td>"+js_Q3_2+"</td><td></td></tr><td>Is there adequate legroom and clearance under the desktop?</td><td>"+js_Q3_3+"</td><td></td></tr><tr><td><b>DISPLAY SCREEN EQUIPMENT</b></td><td></td><td></td></tr><td>Is the information on the screen easy to read?</td><td>"+js_Q4_1+"</td><td></td></tr><td>Can the brightness and contrast be adjusted?</td><td>"+js_Q4_2+"</td><td></td></tr><td>Can you adjust the height of the screen to approximately eye level?</td><td>"+js_Q4_3+"</td><td></td></tr><td>Is the screen free of reflections/glare?</td><td>"+js_Q4_4+"</td><td></td></tr><td>Is the screen directly in front of you when seated at your workstation?</td><td>"+js_Q4_5+"</td><td></td></tr><td>If you have more than one computer screen on your desk, are they all at approximately the same height?</td><td>"+js_Q4_6+"</td><td></td></tr><tr><td><b>ENVIRONMENT</b></td><td></td><td></td></tr><td>Does the work environment allow you to work comfortably? If no, please give details.</td><td>"+js_Q5_1+"</td><td></td></tr><tr><td><b>OTHER</b></td><td></td><td></td></tr><tr><td>Do you move from your seat at least once an hour?</td><td>"+js_Q6_1+"</td><td></td></tr><td>Do you feel you have received adequate training in the use of the software you are required to use?</td><td>"+js_Q6_2+"</td><td></td></tr></table><br><br>";

//Add section about typing style, eyetests etc.
pageContent += "<p><b>Which best describes your typing style?</b></p><p><li>Touch Typist (don't need to look at the keys, only at the screen) &#9744</li></p><p><li>Multifinger (use several fingers but look mainly at the keyboard, occasionally at the screen) &#9744</li></p><p><li>Hunt and Peck (type using only one finger or two fingers and check the screen regularly) &#9744</li></p><br><br>";


//Add table - regarding any concerns
pageContent += "<table><tr><th></th><th>Yes/No</th><th>If Yes, please provide further details</th></tr><tr><td>Are there any concerns with the DSE workstation that have not been covered in the checklist?</td><td>Y / N</td><td></td></tr><tr><td>Have you experienced any discomfort or symptoms which you think may be attributed to work at this DSE workstation?</td><td>Y / N</td><td></td></tr></table><br>";

//Add table to be completed by line manager
pageContent += "<table><tr><th>To be completed by Line Manager</th><th></th></tr><tr><td>Name</td><td></td></tr><tr><td>Signature</td><td></td></tr><tr><td>CDSID</td><td></td></tr><tr><td>Date</td><td></td></tr><tr><td>Any Further Action Required?</td><td>Yes / No</td></tr></table>"

//Add words about sight test voucher
pageContent += "<p>This form can be used to get an eye sight test voucher. <b>This provision is not applicable for agency staff or contractors.</b> If this is required, please complete the boxes below and email or send this form to Occupational Health. The voucher will only be made available if your manager has reviewed and signed the boxes above. This is centrally funded.<br><br>If you require glasses for use with DSE equipment and do not use them for any other general activities, these may be purchased by the company. This will be discussed with you after your eye test has been completed by the provider.</p>"

//Add table about sight test voucher
pageContent += "<table><tr><th>Eye sight test request</th><th></th></tr><tr><td>Name</td><td></td></tr><tr><td>Payroll number</td><td></td></tr><tr><td>Department/Function</td><td></td></tr></table><br>"

//Add Action List
pageContent += "<table><tr><th>Action List</th><th></th><th>Completed Date</th></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table><br>"

//Add final table for follow up assessments
pageContent += "<table><tr><th>Follow up assessments</th><th></th><th></th></tr><tr><th>Name</th><th>Date</th><th>Comment</th></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>"

// closing the font style/body
pageContent+="</div>";

// open the window, and populate it.
myPrintPop=window.open('', 'myPopup', 'width=500, height=600');

//overwrite the popup - 1st arg = CSS stylesheet (myStyles.css) in Data URI format, 2nd arg = pageContent var.
myPrintPop.document.write('<head><link rel="stylesheet" href="data:text/plain;base64,77u/dGFibGUsIHRoLCB0ZCB7DQoJYm9yZGVyLXN0eWxlOiBzb2xpZDsNCglib3JkZXI6IDFweCBzb2xpZCBibGFjazsNCglib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOw0KCQ0KCX0NCg0KdGFibGUgew0KCXRhYmxlLWxheW91dDogZml4ZWQ7DQoJd2lkdGg6IDEwMCUNCg0KfQ0KDQp0aCB7DQoJcGFkZGluZzogNXB4Ow0KCXRleHQtYWxpZ246IGxlZnQ7DQoJaGVpZ2h0OiAxNXB4Ow0KCXdpZHRoOiAxMDAlOw0KCXBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDsNCg0KfQ0KDQp0ZCB7DQoJcGFkZGluZzogNXB4Ow0KCXRleHQtYWxpZ246IGxlZnQ7DQoJaGVpZ2h0OiA0NnB4Ow0KCXdpZHRoOiAxMDAlOw0KCXBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDsNCg0KfQ0KDQp0aCB7DQoJYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMg0KDQp9DQoJDQpib2R5IHtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTt9DQoNCi5yZWQgew0KCWNvbG9yOiByZWQ7DQp9DQoNCg=="></head>', pageContent);

myPrintPop.title="Display Sreeen Equipment User/Operator Assessment Questionnaire";
}

