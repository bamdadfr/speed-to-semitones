# speed-to-semitones

> calculate semitones from audio speed

<p>
    <a href="https://github.com/bamdadsabbagh/speed-to-semitones">
        <img alt="github stars" src="https://img.shields.io/github/stars/bamdadsabbagh/speed-to-semitones">
    </a>
    <img alt="license" src="https://img.shields.io/github/license/bamdadsabbagh/speed-to-semitones">
</p>

<p>
    <img alt="languages used" src="https://img.shields.io/github/languages/count/bamdadsabbagh/speed-to-semitones">
    <img alt="language most used" src="https://img.shields.io/github/languages/top/bamdadsabbagh/speed-to-semitones">
</p>

<p>
    <img alt="release version" src="https://img.shields.io/github/v/release/bamdadsabbagh/speed-to-semitones">
    <img alt="code climate" src="https://api.codeclimate.com/v1/badges/e9b9fa29e994f3006aa4/maintainability" />
    <img alt="codecov" src="https://img.shields.io/codecov/c/github/bamdadsabbagh/speed-to-semitones">
</p>

<p>
    <img alt="dependencies" src="https://img.shields.io/david/bamdadsabbagh/speed-to-semitones">
    <img alt="dev dependencies" src="https://img.shields.io/david/dev/bamdadsabbagh/speed-to-semitones">
    <img alt="snyk vulnerabilities" src="https://img.shields.io/snyk/vulnerabilities/github/bamdadsabbagh/speed-to-semitones">
</p>

## parameters

1. `speed` number
2. `digits` number, optional, between `0` and `20`

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
