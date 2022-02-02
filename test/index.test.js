import speedToSemitones from '../src';

describe('testing parameters', () => {
  it('should accept a number as speed parameter', () => {
    expect(speedToSemitones(1))
      .toBeDefined();
  });

  it('should refuse a string as speed parameter', () => {
    expect(() => {
      speedToSemitones('string');
    })
      .toThrowError();
  });

  it('should accept a number as digits parameter', () => {
    expect(speedToSemitones(1, 1))
      .toBeDefined();
  });

  it('should refuse a string as digits parameter', () => {
    expect(() => {
      speedToSemitones(1, 'string');
    })
      .toThrowError();
  });

  it('should refuse a number lower than 0 as digits parameter', () => {
    expect(() => {
      speedToSemitones(1, -1);
    })
      .toThrowError();
  });

  it('should refuse a number higher than 20 as digits parameter', () => {
    expect(() => {
      speedToSemitones(1, 21);
    })
      .toThrowError();
  });
});

describe('testing return values', () => {
  it('should return 0 semitone if speed is 1', () => {
    expect(
      speedToSemitones(1),
    )
      .toBe('0');
  });

  it('should return -12 semitones if speed is 0.5', () => {
    expect(
      speedToSemitones(0.5),
    )
      .toBe('-12');
  });

  it('should return 12 semitones if speed is 2', () => {
    expect(
      speedToSemitones(2),
    )
      .toBe('12');
  });

  it('should return 12.000 semitones if speed is 2 and digits is 3', () => {
    expect(
      speedToSemitones(2, 3),
    )
      .toBe('12.000');
  });
});
