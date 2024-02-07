function drawText() {
  var fontSize = Math.min(30, window.innerWidth / 25); // Adjust font size based on screen width
  var lineHeight = 8;

  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";

  if (frameNumber < 300) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "everyday day I cannot believe how lucky I am",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity += 1; // Increase opacity faster
  } else if (frameNumber >= 300 && frameNumber < 600) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "everyday day I cannot believe how lucky I am",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity -= 0.1; // Decrease opacity faster
  } else if (frameNumber >= 600 && frameNumber < 900) {
    // Reset opacity before next statement on canvas
    opacity = 0;
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      ["amongst trillions and trillions of stars,", "over billions of years"],
      canvas.width / 2,
      canvas.height / 2,
      fontSize,
      lineHeight
    );
    opacity += 0.05; // Increase opacity faster
  } else if (frameNumber >= 900 && frameNumber < 1200) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      ["amongst trillions and trillions of stars,", "over billions of years"],
      canvas.width / 2,
      canvas.height / 2,
      fontSize,
      lineHeight
    );
    opacity -= 0.05; // Decrease opacity faster
  }
  // Add similar modifications for other parts of the text animation
  // ...
}
