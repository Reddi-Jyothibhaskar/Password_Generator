function generatePassword()
{
	let length = parseInt(document.getElementById("length").value);	
	const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";	
	let password = "";
	if(isNaN(length) || length < 4 || length > 32)
	{
		document.getElementById("password").textContent = "Please enter a valid length (4-32).";
		return;
	}
	for(let i = 0;i < length; i++)
	{
		let randomIndex = Math.floor(Math.random()*chars.length);
		password += chars[randomIndex];
	}
	document.getElementById("password").textContent = password;
}
