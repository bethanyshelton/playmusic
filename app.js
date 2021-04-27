let thumbnail = document.querySelector(".thumbnail");
let title = document.querySelector(".title");
let artist = document.querySelector(".artist");

let backBtn = document.querySelector(".back");
let playpauseBtn = document.querySelector(".playpause");
let forwardBtn = document.querySelector(".forward");

let timeSlider = document.querySelector(".time-slider");
let currentTime = document.querySelector(".current-time");
let totalTime = document.querySelector(".total-time");

let trackIndex = 0;
let isPlaying = false;
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

//Play all songs in order when 'play' button is clicked
//Create the audio element
let currentTrack = document.createElement("audio");
//Load track to audio element

//  Change play button icon to pause button icon
//  Change title and artist text

//Pause playing when 'pause' button is clicked
//  Change pause button icon to play button icon

//Play the previous track when 'back' button is clicked

//Play the next track when 'forward' button is clicked

//Total Time should show the length of the track
//  Current Time should show progress of track
//  Slider should move with track progress
//  Slider should be moveable to anyplace in the track

//Each track should have it's own thumbnail image
