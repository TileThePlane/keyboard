
$(document).ready(function () {
	// generate table 
	var data = [ [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ], 
				[ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ], 
				[ 'z', 'x', 'c', 'v', 'b', 'n', 'm' ] ];

	var html = '<table><tbody>';
	for (var i = 0, len = data.length; i < len; ++i) {
		html += '<tr>';
		for (var j = 0, rowLen = data[i].length; j < rowLen; ++j ) {
			html += '<td><div id="'+ data[i][j] +'">' + data[i][j] + '</div></td>';
		}
		html += "</tr>";
	}
	html += '</tbody></table>';
	$(html).appendTo('#keys');
	
	//create and play piano key tones
	function playKeyTone (keyToneFile, pressed_key) {
		hightlightKeyPress(pressed_key,1);
		var key_tone = new Audio(keyToneFile);
		setTimeout(function(){ hightlightKeyPress(pressed_key); }, 100);
		key_tone.play();
	}
	
	function hightlightKeyPress (pressed_key , state = 0) {
		if (state === 1) {
			highlight_color = 'yellow';
		} else {
			highlight_color = 'white';
		}
		$('#'+pressed_key).css({'background-color': highlight_color});
	}
	
	// bind keys to notes
	$(document).keydown(function(e) {
    switch(e.key) {
        case 'q':
        case 'Q':
			playKeyTone("piano_keys/Piano11.mp3",'q');
		break;
				
        case 'w':
        case 'W':
			playKeyTone("piano_keys/Piano12.mp3",'w');
		break;
		
        case 'e':
        case 'E':
			playKeyTone("piano_keys/Piano13.mp3",'e');
		break;
		
        case 'r':
        case 'R':
			playKeyTone("piano_keys/Piano14.mp3",'r');
		break;
		
        case 't':
        case 'T':
			playKeyTone("piano_keys/Piano15.mp3",'t');
		break;
		
        case 'y':
        case 'Y':
			playKeyTone("piano_keys/Piano16.mp3",'y');
		break;
		
        case 'u':
        case 'U':
			playKeyTone("piano_keys/Piano17.mp3",'u');
		break;
		
        case 'i':
        case 'I':
			playKeyTone("piano_keys/Piano18.mp3",'i');
		break;
		
        case 'o':
        case 'O':
			playKeyTone("piano_keys/Piano19.mp3",'o');
		break;
		
        case 'p':
        case 'P':
			playKeyTone("piano_keys/Piano110.mp3",'p');
		break;
		
        case 'a':
        case 'A':
			playKeyTone("piano_keys/Piano112.mp3",'a');
		break;
		
        case 's':
        case 'S':
			playKeyTone("piano_keys/Piano113.mp3",'s');
		break;
		
        case 'd':
        case 'D':
			playKeyTone("piano_keys/Piano114.mp3",'d');
		break;
		
        case 'f':
        case 'F':
			playKeyTone("piano_keys/Piano115.mp3",'f');
		break;
		
        case 'g':
        case 'G':
			playKeyTone("piano_keys/Piano116.mp3",'g');
		break;
		
        case 'h':
        case 'H':
			playKeyTone("piano_keys/Piano117.mp3",'h');
		break;
		
        case 'j':
        case 'J':
			playKeyTone("piano_keys/Piano118.mp3",'j');
		break;
		
        case 'k':
        case 'K':
			playKeyTone("piano_keys/Piano119.mp3",'k');
		break;
		
        case 'l':
        case 'L':
			playKeyTone("piano_keys/Piano120.mp3",'l');
		break;
		
        case 'z':
        case 'Z':
			playKeyTone("piano_keys/Piano121.mp3",'z');
		break;
		
        case 'x':
        case 'X':
			playKeyTone("piano_keys/Piano122.mp3",'x');
		break;
		
        case 'c':
        case 'C':
			playKeyTone("piano_keys/Piano123.mp3",'c');
		break;
		
        case 'v':
        case 'V':
			playKeyTone("piano_keys/Piano124.mp3",'v');
		break;
		
        case 'b':
        case 'B':
			playKeyTone("piano_keys/Piano125.mp3",'b');
		break;
		
        case 'n':
        case 'N':
			playKeyTone("piano_keys/Wa.mp3",'n');
		break;
		
        case 'm':
        case 'M':
			playKeyTone("piano_keys/Wo.mp3",'m');
		break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
	});
});