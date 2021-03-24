# speed-to-semitones

calculate semitones from audio speed

## parameters

- `speed` number
- `digits` number, optional, between `0` and `20`

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
