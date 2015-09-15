# firefox-developer-header
Firefox addon to add in a unique header to each request, to easily identify you as the developer of the project (note, this requires server side code to detect them)

## How to use
To make this add-on worth using, your server needs to detect the header. Here are some examples:

###PHP
	<?php
		//Assuming your header is 'Att-Developer-Header'
		$headers = getallheaders();
		if(isset($headers['Att-Developer-Header'])) { 
			echo 'This is a developer'; 
		}
	?>