const patternDict =[{
    pattern : "\\b(?<greeting>hi|hello|hey|namaste)\\b",
	intent:'Hello'
},
{
	pattern: '\\b(Need help)\\b',
	intent:'Help'
},
{
	pattern: '\\b(How|how are you?)\\b',
	intent:'How are you'
},
{
	pattern: '\\b(Thank you|Thanks!|thank|thanks)\\b',
	intent:'Thank'
},
{
	pattern: '\\b(Fine|fine|good)\\b',
	intent:'Good'
},
{
	pattern: '\\b(What is your name ?)\\b',
	intent:'Name'
},

{
	pattern: '\\b(I would like to go out today|go out)\\b',
	intent:'Out'
},
{
	pattern: '\\b(Do you have any recommandation ? | advice)\\b',
	intent:'FirstAdvice'
},
{
	pattern: '\\b(I dont know|maybe)\\b',
	intent:'SecondAdvice'
},
{
	pattern: '\\b(Need help)\\b',
	intent:'Help'
}
,
{
    pattern : "(temp\\sin\\b(?<City>.+)|weather\\s(like\\s)?in\\b(?<city>.+))",
	intent:'CurrentWeather'
},
{
    pattern : "(temp\\sin\\b(?<City>.+)|information\\s(like\\s)?in\\b(?<city>.+))",
	intent:'CurrentInfo'
},
{
	pattern:'\\b(bye|exit|quit|by)\\b',
	intent: 'Exit'
}];


module.exports=patternDict;
