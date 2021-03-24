# speed-to-semitones

calculate semitones from audio speed

## examples

### as `default` export

```javascript
import speedToSemitones from 'speed-to-semitones'

const semitones = speedToSemitones(0.5) // returns "-12"
```

### as `named` export

```javascript
import {speedToSemitones} from 'speed-to-semitones'

const semitones = speedToSemitones(0.5, 2) // returns "-12.00"
```
