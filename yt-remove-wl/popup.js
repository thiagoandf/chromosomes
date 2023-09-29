
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("trigger");
  button.addEventListener("click", removeWatchedVideos);
});

// Function to remove watched videos
const removeWatchedVideos = () => {
  console.log('triggered')
  // Get all video elements
  const videoElements = document.querySelectorAll(
    "ytd-playlist-video-renderer"
  );

  videoElements.forEach((videoElement) => {
    // Find the progress div and get its width
    const progressDiv = videoElement.querySelector("#progress");
    console.log(progressDiv)
    if (!progressDiv) return;
    const width = parseFloat(
      progressDiv.style.width.replace("%", "")
    );

    if (width > 50) {
      // Trigger hover event to show the menu button
      videoElement.dispatchEvent(new Event("mouseover"));

      // Find the menu button and click it
      const menuButton = videoElement.querySelector(
        "#button"
      );
      menuButton.click();

      // Find the remove button and click itconst listbox = document.querySelector('tp-yt-paper-listbox#items');
      const listbox = document.querySelector('tp-yt-paper-listbox#items');
      const removeButton = Array.from(listbox.children).find(child => {
        return child.textContent.includes('Remove from Watch later');
      });
      removeButton.click();
    }
  });
};

removeWatchedVideos();