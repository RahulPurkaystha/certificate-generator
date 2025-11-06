function generateCertificate() {
  const name = document.getElementById("nameInput").value.trim();
  const fathername = document.getElementById('fnameInput').value.trim();
if (name === "" || fathername === "") {
        alert("Please enter both name and father's name!");
        return;
  }

  const canvas = document.getElementById("certificateCanvas");
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.src = "certificate-template.png";

  img.onload = function() {
    // Draw template
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Customize text
    ctx.font = "25px Imprint MT Shadow";
    ctx.style = "Bold Oblique";
    ctx.textAlign = "center";
    ctx.fillText(name, canvas.width / 1.7, canvas.height / 2.03 + 50);
    ctx.fillText(fathername, canvas.width / 1.8, canvas.height / 1.83 + 50);

    // Show download button
    const downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.style.display = "inline-block";
    downloadBtn.href = canvas.toDataURL("image/png");
  };
}
