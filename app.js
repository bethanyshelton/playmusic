let trackIndex = 0;
let playing = false;
let updateTimer;

//List of song tracks
let trackList = [
	{
		name: "Peer Gynt",
		artist: "Edvard Grieg",
		image:
			"https://www.seattlechambermusic.org/wp-content/uploads/Edvard-Grieg.jpg",
		path: "songs/01 Peer Gynt.mp3",
	},
	{
		name: "Violin Concerto in E",
		artist: "Johann Sebastian Bach",
		image:
			"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTIwNjA4NjMzNzMxNjQ2OTg4/johann-sebastian-bach-9194289-1-402.jpg",
		path: "songs/02 Violin Concerto in E.mp3",
	},
	{
		name: "The Nutcracker",
		artist: "Pyotr Ilyich Tchaikovsky",
		image:
			"https://www.onthisday.com/images/people/pyotr-ilyich-tchaikovsky-medium.jpg",
		path: "songs/03 The Nutcracker.mp3",
	},
	{
		name: "The Snow is Dancing",
		artist: "Claude Debussy",
		image:
			"https://upload.wikimedia.org/wikipedia/en/b/b4/Claude_Debussy_atelier_Nadar.jpg",
		path: "songs/04 The Snow is Dancing.mp3",
	},
	{
		name: "Symphonie Concertante",
		artist: "Wolfgang Amadeus Mozart",
		image:
			"https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzMyNjY1ODY5/wolfgang-mozart-9417115-2-402.jpg",
		path: "songs/05 Symphonie Concertante.mp3",
	},
	{
		name: "Violin Concerto in G minor",
		artist: "Antonio Vivaldi",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Vivaldi.jpg/1200px-Vivaldi.jpg",
		path: "songs/06 Violin Concerto In G Minor.mp3",
	},
	{
		name: "Sleeping Beauty",
		artist: "Pyotr Ilyich Tchaikovsky",
		image:
			"https://www.onthisday.com/images/people/pyotr-ilyich-tchaikovsky-medium.jpg",
		path: "songs/07 Sleeping Beauty.mp3",
	},
	{
		name: "Water Music",
		artist: "George Frideric Handel",
		image:
			"https://i.guim.co.uk/img/media/ca5a04a5b6d834077674d2441d89762450323b5f/0_112_2346_1408/master/2346.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9ed9477f31d9aab959a8a94756af084e",
		path: "songs/08 Water Music.mp3",
	},
	{
		name: "From Holberg's Time",
		artist: "Edvard Grieg",
		image:
			"https://www.seattlechambermusic.org/wp-content/uploads/Edvard-Grieg.jpg",
		path: "songs/09 From Holbergs Time.mp3",
	},
	{
		name: "Music for the Royal Fireworks",
		artist: "George Frideric Handel",
		image:
			"https://i.guim.co.uk/img/media/ca5a04a5b6d834077674d2441d89762450323b5f/0_112_2346_1408/master/2346.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9ed9477f31d9aab959a8a94756af084e",
		path: "songs/10 Royal Fireworks.mp3",
	},
	{
		name: "Symphony 101 in D Major",
		artist: "Franz Joseph Haydn",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/0/05/Joseph_Haydn.jpg",
		path: "songs/11 Symphony 101.mp3",
	},
	{
		name: "Hansel Und Gretel",
		artist: "Engelbert Humperdinck",
		image:
			"https://mahlerfoundation.org/wp-content/uploads/2015/01/Humperdinck.jpg",
		path: "songs/12 Hansel Und Gretel.mp3",
	},
];

//Create a new javascript Audio element
let currentTrack = new Audio();

function loadTrack(trackIndex) {
	//Clear timer from previously played tracks with javascript clearInterval method
	clearInterval(updateTimer);
	resetValues();

	//Load track to audio element
	currentTrack.src = trackList[trackIndex].path;
	currentTrack.load();

	//Change title and artist text
	document.querySelector(".title").textContent = trackList[trackIndex].name;
	document.querySelector(".artist").textContent = trackList[trackIndex].artist;

	//Each track should have it's own thumbnail image
	document.querySelector(".thumbnail").style.backgroundImage =
		"url(" + trackList[trackIndex].image + ")";

	//Slider should move with track progress
	// updateTimer = setInterval(seekUpdate, 1000);

	//Play the next track automatically when the current track ends
	currentTrack.addEventListener("ended", nextTrack);
}

loadTrack(trackIndex);

//Reset everything back to the beginning
function resetValues() {
	//Reset both timers
	document.querySelector(".current-time").textContent = "00.00";
	document.querySelector(".total-time").textContent = "00.00";
	//Reset the slider back to the beginning
	document.querySelector(".time-slider").value = 0;
}

//Play all songs in order when 'play' button is clicked
function playPause() {
	//if nothing is playing start playing otherwise pause
	if (!playing) {
		playTrack();
	} else {
		pauseTrack();
	}
}

function playTrack() {
	//play the track
	currentTrack.play();
	//change playing variable to update playPause()
	playing = true;
	//  Change play button icon to pause button icon
	document.querySelector(".playpause").innerHTML =
		'<i class="fas fa-pause"></i>';
}

function pauseTrack() {
	//Pause playing when 'pause' button is clicked
	currentTrack.pause();
	//change playing variable to update playPause()
	playing = false;
	//  Change pause button icon to play button icon
	document.querySelector(".playpause").innerHTML =
		'<i class="fas fa-play"></i>';
}

document.querySelector(".playpause").addEventListener("click", playPause);

//Play the previous track when 'back' button is clicked
function nextTrack() {
	//if currently playing last track go back to beginning
	if (trackIndex < trackList.length - 1) {
		trackIndex++;
	} else {
		trackIndex = 0;
	}
	loadTrack(trackIndex);
	playTrack();
}

document.querySelector(".forward").addEventListener("click", nextTrack);

//Play the next track when 'forward' button is clicked
function prevTrack() {
	//if currently playing first track go to last track
	if (trackIndex > 0) {
		trackIndex--;
	} else {
		trackIndex = trackList.length;
	}
	loadTrack(trackIndex);
	playTrack();
}

document.querySelector(".back").addEventListener("click", prevTrack);

//Total Time should show the length of the track

//  Current Time should show progress of track

//  Slider should be moveable to anyplace in the track
