/**
 * AudioController - Verwaltung von Sound und Audio-Effekten
 * Mit Fehlerbehandlung für Browser ohne Audio-Support
 */

class AudioController {
  constructor() {
    this.audioContext = null;
    this.soundEnabled = false;
    this.speechRate = 0.85;
    this.lastHoverSoundAt = 0;
    this.lastHoverSoundTarget = null;
  }

  /**
   * Initialisiert AudioContext mit Fehlerbehandlung
   */
  getAudioContext() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      
      if (!AudioContextClass) {
        console.warn("AudioContext nicht im Browser unterstützt");
        return null;
      }

      if (!this.audioContext) {
        this.audioContext = new AudioContextClass();
      }

      if (this.audioContext.state === "suspended") {
        this.audioContext.resume()
          .catch((error) => {
            console.warn("AudioContext Resuming fehlgeschlagen:", error);
          });
      }

      return this.audioContext;
    } catch (error) {
      console.error("Fehler beim Initialisieren des AudioContext:", error);
      return null;
    }
  }

  /**
   * Sound abspielen: Ton mit Frequenz
   * @param {number} frequency - Frequenz in Hz
   * @param {number} duration - Dauer in Sekunden
   * @param {number} volume - Lautstärke 0-1
   * @param {string} type - Wellentyp: "sine", "square", "sawtooth", "triangle"
   * @param {number} delay - Verzögerung in Sekunden
   */
  playTone(frequency, duration, volume, type = "sine", delay = 0) {
    if (!this.soundEnabled) return;

    try {
      const context = this.getAudioContext();
      if (!context) return;

      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const startTime = context.currentTime + delay;
      const endTime = startTime + duration;

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, startTime);
      
      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(Math.max(volume, 0.0001), startTime + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, endTime);

      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(startTime);
      oscillator.stop(endTime + 0.02);
    } catch (error) {
      console.warn("Fehler beim Abspielen des Tons:", error);
    }
  }

  /**
   * Vordefinierte Sound-Effekte
   */
  playSound(type) {
    if (!this.soundEnabled) return;

    switch (type) {
      case "hover":
        // Leiser Orientierungston bei Hover
        this.playTone(520, 0.045, 0.045, "sine");
        break;

      case "correct":
        // Positiv: Zwei aufsteigende Töne
        this.playTone(660, 0.12, 0.075, "sine", 0);
        this.playTone(880, 0.14, 0.065, "sine", 0.10);
        break;

      case "wrong":
        // Negativ: Ein tieferer Ton
        this.playTone(220, 0.18, 0.060, "triangle", 0);
        break;

      case "success":
        // Erfolgreich: Drei aufsteigende Töne
        this.playTone(523.25, 0.12, 0.065, "sine", 0);
        this.playTone(659.25, 0.12, 0.065, "sine", 0.11);
        this.playTone(783.99, 0.18, 0.060, "sine", 0.22);
        break;

      case "toggle":
        // Ein Ton beim Toggle
        this.playTone(600, 0.10, 0.050, "sine", 0);
        break;

      default:
        console.warn(`Unbekannter Sound-Typ: ${type}`);
    }
  }

  /**
   * Hover-Sound mit Drosselung (max. 1 Sound pro 350ms)
   */
  playHoverSound(event) {
    if (!this.soundEnabled) return;

    const target = event.target.closest(
      ".topic-card, .action-card, .support-help-button, .answer-option, .card-read-button, .reading-button, .plain-back-button, .nav-button"
    );

    if (!target) return;

    const now = Date.now();
    if (target === this.lastHoverSoundTarget && now - this.lastHoverSoundAt < 1200) return;
    if (now - this.lastHoverSoundAt < 350) return;

    this.lastHoverSoundTarget = target;
    this.lastHoverSoundAt = now;
    this.playSound("hover");
  }

  /**
   * Sound togglen
   */
  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    if (this.soundEnabled) {
      this.playSound("toggle");
    }
    return this.soundEnabled;
  }

  /**
   * Sound aktiviert?
   */
  isEnabled() {
    return this.soundEnabled;
  }
}

// Singleton Export
export default new AudioController();
