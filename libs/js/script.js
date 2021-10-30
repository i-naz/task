	$('#getCountryInfo').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
				lang: $('#selLanguage').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {
        $('#result').html("Continent:" + result['data'][0]['continent'] +
                    "\n Capital:" +result['data'][0]['capital'] +
					"\n Languages:"+result['data'][0]['languages']+
					"\n Population :"+result['data'][0]['population']+
					"\n Area :"+result['data'][0]['areaInSqKm']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});

	$('#getNearByPlace').click(function() {

		$.ajax({
			url: "libs/php/getNearByPlace.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#lat').val(),
				lng: $('#lng').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {
        $('#result').html("Near by places:"+ result['data'][0]['asciiName']
         );

				}

			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				alert('error'+errorThrown + jqXHR + textStatus);
			}
		});
		});



$('#getNearByWeather').click(function() {
		$.ajax({
			url: "libs/php/getNearByWeather.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#latw').val(),
				lng: $('#lngw').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {
        $('#result').html("Near by weather"
        +"\n observation = "+ result['data']['observation']
        +"\n humidity = "+result['data']['humidity']
        +"\n windDirection = "+result['data']['windDirection']
        +"\n temperature = "+result['data']['temperature']
        +"\n windSpeed = "+result['data']['windSpeed']
        +"\n datetime = "+result['data']['datetime']
        );

				}

			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				alert('error'+errorThrown + jqXHR + textStatus);
			}
		});

	});


	$('#neighbourhoodInfo').click(function() {

    		$.ajax({
    			url: "libs/php/neigbourhoodInfo.php",
    			type: 'POST',
    			dataType: 'json',
    			data: {
    				lat: $('#lat3').val(),
    				lng: $('#lng3').val()
    			},
    			success: function(result) {

    				console.log(JSON.stringify(result));

    				if (result.status.name == "ok") {
             $('#result').html("NeighbourHood Information "
                    +"\n name = "+ result['data']['name']
                    +"\n city = "+result['data']['city']
                    +"\n countryName = "+result['data']['countryName']
                    +"\n countryCode = "+result['data']['countryCode']
                    );

    				}

    			},
    			error: function(jqXHR, textStatus, errorThrown) {
    				// your error code
    				alert('error'+errorThrown + jqXHR + textStatus);
    			}
    		});
    		});


