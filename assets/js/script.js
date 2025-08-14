// Placeholder for future JavaScript if needed
const params = getQueryParams();
const playerContainer = document.getElementById('player-container');

if(params.video) {
  const videoUrl = params.video;

  // Check if URL is a YouTube link
  const youtubeMatch = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (youtubeMatch) {
    // Create YouTube player embed wrapper
    playerContainer.innerHTML = `
      <div class="plyr__video-embed" id="youtube-player">
        <iframe
          src="https://www.youtube.com/embed/${youtubeMatch[1]}?origin=${location.origin}&iv_load_policy=3&modestbranding=1&playsinline=1"
          allowfullscreen
          allowtransparency
          allow="autoplay"
        ></iframe>
      </div>
    `;
    const player = new Plyr('#youtube-player');
  } else {
    // Assume direct MP4 link
    playerContainer.innerHTML = `<video id="player" playsinline controls></video>`;
    const player = new Plyr('#player');
    const videoEl = document.getElementById('player');
    videoEl.src = videoUrl;
    videoEl.type = 'video/mp4';
  }
}
