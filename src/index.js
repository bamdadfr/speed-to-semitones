/**
 * Convert the audio playback speed to a number of semitones based on the chromatic scale.
 * Normal playback speed is 1.0, which is a pitch of 0 semitones.
 *
 * @param {number} speed
 *    The audio playback speed.
 * @param {number} [digits=0]
 *    The number of digits to truncate the result to.
 *    Digits can not be lower than 0 and greater than 20.
 * @returns {string}
 *    The semitones.
 */
export default function speedToSemitones(speed, digits = 0) {
  if (typeof speed !== 'number') {
    throw new TypeError('speed is not a number');
  }

  if (typeof digits !== 'number') {
    throw new TypeError('digits is not a number');
  }

  if (digits < 0 || digits > 20) {
    throw new TypeError('digits is out of range');
  }

  const semitones = 12 * (Math.log(speed) / Math.log(2));

  return semitones.toFixed(digits);
}
