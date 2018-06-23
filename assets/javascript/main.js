
	var totalScore = 0;
	var globalRandNum = 0;
	var loss = 0 
	var win = 0
	var newGameFlag = 0
	var newGameFlag1 = 0
	var newGameFlag2 = 0
	var newGameFlag3 = 0 
	var newGameFlag4 = 0
	/*takes in min and max numbers and returns a randomely genrated numbers between the min and max values*/
	function genrateRandomnumber(min, max, genrateflag){
		var randNum;

		randNum = Math.floor(Math.random()* (max - min)) + min 
		if (genrateflag == 1)
			{globalRandNum = randNum;}
		return randNum
	}

	/*function to be executed  when a button is clicked.*/
	function assignRandValue()
	{
		var numberToadd = 0
		var buttonClicked = $(this);
		console.log(this.id);
		

		if(this.id == 'button1'){
			console.log('at button1')
			if(newGameFlag1 == 0)
			{
				console.log('at button1')
				newRandNum1 = genrateRandomnumber(4,12, 0);
				newRandNum1 = buttonClicked.attr('data-button1value')
				newGameFlag1++;
				numberToadd = parseInt(newRandNum1);
			}
			else
			{
				numberToadd = parseInt(newRandNum1);
			}
		}
		else if (this.id == 'button2')
		{
			console.log('at button2')
				if (newGameFlag2 == 0)
				{
				newRandNum2 = genrateRandomnumber(4,12, 0);
				newRandNum2 = buttonClicked.attr('data-button2value');
				newGameFlag2++;
				numberToadd = parseInt(newRandNum2);
				}
				else
				{
					numberToadd = parseInt(newRandNum2);
				}
		console.log('button2 = ' + numberToadd)
		}	
		else if (this.id == 'button3')
		{
			console.log('at button3')
			if(newGameFlag3 == 0)
				{
				newRandNum3 = genrateRandomnumber(4,12, 0);
				newRandNum3 = buttonClicked.attr('data-button3value')
				newGameFlag3++;
				numberToadd = parseInt(newRandNum3)
				}
			else
			{
				numberToadd = parseInt(newRandNum3);
			}
		console.log('button3 = ' + numberToadd)
		}
		else if (this.id == 'button4') 
			{
				console.log('at button4')
				if(newGameFlag4 == 0)
				{
					newRandNum4 = genrateRandomnumber(4,12, 0);
					newRandNum4 = buttonClicked.attr('data-button4value')
					newGameFlag4++;
					numberToadd = parseInt(newRandNum4);
				}
				else
				{
					numberToadd = parseInt(newRandNum4);
				}	
			}
		else if (this.id == 'clear')
		{ 
			clearValue();
		}
		totalScore = totalScore + numberToadd;
		// debugger;
        console.log('global nuber = ' + globalRandNum + '   totalscore = '+ totalScore)
        
		if(globalRandNum < totalScore)
		{

			$('#box-score').text(totalScore + "  Game Over! Click 'Try Again' to Play again");
			loss++;
			$('#lossdiv').text('Loss: ' + loss)
			$('#windiv').text('Win: '+win)
			clearValue();
			$('.box-rand').text(globalRandNum)
		}

		else if( globalRandNum == totalScore)
		{
			win++;
			$('#lossdiv').text('Loss: ' + loss)
			$('#windiv').text('Win: '+win)
			$('#box-score').text(totalScore + " Good Job!! You Won!!");
			clearValue();
			$('.box-rand').text(globalRandNum)
		}
		else
		{
			$('#box-score').text(totalScore);
		}
	}

	function clearValue()
	{
		globalRandNum = genrateRandomnumber(19, 120, 1);
		totalScore = 0;
		newGameFlag = 0;
		newGameFlag = 0;
		newGameFlag1 = 0;
		newGameFlag2 = 0;
		newGameFlag3 = 0;
		newGameFlag4 = 0;
		$('#button1').attr('data-button1value', genrateRandomnumber(1, 12, 0))
	    $('#button2').attr('data-button2value', genrateRandomnumber(1, 12, 0))
	    $('#button3').attr('data-button3value', genrateRandomnumber(1, 12, 0))
	    $('#button4').attr('data-button4value', genrateRandomnumber(1, 12, 0))
	    $('.box-rand').text(globalRandNum)
	}

	globalRandNum = genrateRandomnumber(19, 120, 1);
	$('.box-rand').text(globalRandNum)
    $('#button1').attr('data-button1value', genrateRandomnumber(1, 12, 0))
    $('#button1').on('click', assignRandValue )
    $('#button2').attr('data-button2value', genrateRandomnumber(1, 12, 0))
    $('#button2').on('click', assignRandValue )
    $('#button3').attr('data-button3value', genrateRandomnumber(1, 12, 0))
    $('#button3').on('click', assignRandValue )
    $('#button4').attr('data-button4value', genrateRandomnumber(1, 12, 0))
    $('#button4').on('click', assignRandValue )
    $('#clear').on('click', assignRandValue)
