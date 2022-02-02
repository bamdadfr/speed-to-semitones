![release](https://img.shields.io/github/v/release/bamdadsabbagh/speed-to-semitones)
![license](https://img.shields.io/github/license/bamdadsabbagh/speed-to-semitones)
![maintainability](https://img.shields.io/codeclimate/maintainability/bamdadsabbagh/speed-to-semitones)
![coverage](https://img.shields.io/codeclimate/coverage/bamdadsabbagh/speed-to-semitones)
![snyk](https://img.shields.io/snyk/vulnerabilities/github/bamdadsabbagh/speed-to-semitones)

Convert the audio playback speed to a number of semitones based on the chromatic scale.

Normal playback speed is 1.0, which is a pitch of 0 semitones.

## 🚀 Use

```bash
yarn add speed-to-semitones
```

### ⚡ Example

```javascript
import speedToSemitones from 'speed-to-semitones'

const double = speedToSemitones(2) // returns the string 12
const moreDigits = speedToSemitones(2, 3) // returns the string 12.000
```
