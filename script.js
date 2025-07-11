// script.js

AOS.init({ duration: 1000 });

/* const noticeContent = document.getElementById('notice-content');
const BOT_URL = "https://espada-notice.onrender.com"; // Change if you're using a different backend

async function loadNotice() {
  try {
    const res = await fetch(`${BOT_URL}/get_notice`);
    const data = await res.json();
    noticeContent.innerHTML = data.notice || 'No active notice.';
  } catch (err) {
    noticeContent.innerHTML = 'Unable to load notice.';
  }
}

loadNotice(); */

function generateTip() {
  const sources = ['J.E.O’s Secret', 'Tekkz says', 'ZUKACHI’s Order', 'Guild Intel'];
  const tips = [
    "Always rotate with cover when pushing into the zone.",
    "Use sound cues to track enemy movement.",
    "Master headshots to win 1v1 duels faster.",
    "Learn to use glue walls efficiently in CS ranked.",
    "Play as a team, not as a solo hero!",
    "Hold high ground in BR for better vision.",
    "Switch weapons fast for combo damage.",
    "Watch enemy patterns for predictable moves.",
    "Peek-fire to avoid full exposure.",
    "Use grenades to flush campers.",
    "Avoid open fields without cover.",
    "Upgrade armor before engaging squads.",
    "Check zone shrink timer regularly.",
    "Stay calm in clutch situations.",
    "Customize HUD for faster access.",
    "In BR, land far and rotate smart.",
    "Maintain steady crosshair placement.",
    "Ping enemy position for your squad.",
    "Don’t greed kills—secure survival.",
    "Let support role carry healing items.",
    "Practice sniper flick shots daily.",
    "Hide movement with crouch-walk.",
    "Train glue wall reflexes.",
    "Use training island daily.",
    "Avoid looting in open.",
    "Turn auto-pickup off for better control.",
    "Adjust sensitivity to your playstyle.",
    "Master character abilities.",
    "Pick loadouts matching your role.",
    "Always have backup glue walls.",
    "Reset fights if you’re out-positioned.",
    "Use fast weapon switch over reload.",
    "Bait revives to lure enemies.",
    "Use medkits behind glue walls.",
    "Coordinate ultimates in squad fights.",
    "Don’t camp the same spot twice.",
    "Fake rush to test enemy positions.",
    "Always scout before rushing compound.",
    "Push after knock for advantage.",
    "Use audio to detect snipers.",
    "Slide behind covers in CS.",
    "Don’t shoot glue walls blindly.",
    "Jump before placing glue wall.",
    "Keep one long-range weapon.",
    "Always heal before rotating.",
    "Carry more SMG ammo if rushing.",
    "Plan roles before match starts.",
    "Warm up before ranked grind.",
    "Analyze lost fights in replays.",
    "Let the entry fragger lead.",
    "Don’t reveal position too early.",
    "Use decoys to confuse enemies."
  ];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  const from = sources[Math.floor(Math.random() * sources.length)];

  document.getElementById('tip-box').innerHTML = `💡 ${randomTip}<br><small>Tip from <strong>${from}</strong></small>`;
}

document.getElementById('registration-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const values = Object.fromEntries(formData.entries());

  const now = new Date();
  const formatted = now.toLocaleString();

  const message = `🎮 New Guild Registration!\n` +
    `👤 IGN: ${values.ign}\n` +
    `🆔 UID: ${values.uid}\n` +
    `🏆 BR Rank: ${values.brRank}\n` +
    `🎯 CS Rank: ${values.csRank}\n` +
    `⚔️ Role: ${values.playerRole}\n` +
    `📅 Applied: ${formatted}\n\n` +
    `We go check your details now, if e valid, we go add you to ESPADA. Make sure say you go dey active!\n` +
    `👊🏾 More details go come soon... 🚀`;

  try {
    await fetch(`https://api.telegram.org/bot8103865725:AAEzFW2JFhFmLb8yQsYOO1yVUTMQgK6ZlbU/sendMessage`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        chat_id: "5132388647",
        text: message
      })
    });
    document.getElementById('form-message').innerText = "✅ Application sent! We go get back to you soon!";
  } catch (error) {
    document.getElementById('form-message').innerText = "❌ Failed to send. Abeg try again.";
  }
});
