import Calculator from '../Calculator';

describe('Calculator', () => {
  describe('addition', () => {
    test('adds 67 and 49 to equal 116', () => {
      expect(Calculator.add(67, 49)).toEqual(116);
    });

    test('adds 5 and -10 to equal -5', () => {
      expect(Calculator.add(5, -10)).toEqual(-5);
    });

    test('adds -16 and -31 to equal -47', () => {
      expect(Calculator.add(-16, -31)).toEqual(-47);
    });
  });

  describe('subtraction', () => {
    test('subtracts 49 from 67 to equal 18', () => {
      expect(Calculator.subtract(67, 49)).toEqual(18);
    });

    test('subtracts -10 from 5 to equal 15', () => {
      expect(Calculator.subtract(5, -10)).toEqual(15);
    });

    test('subtracts -31 from -16 to equal 15', () => {
      expect(Calculator.subtract(-16, -31)).toEqual(15);
    });
  });

  describe('division', () => {
    test('divides 67 by 49 to be close to 1.367', () => {
      expect(Calculator.divide(67, 49)).toBeCloseTo(1.367);
    });

    test('divides 5 by -10 to equal -0.5', () => {
      expect(Calculator.divide(5, -10)).toEqual(-0.5);
    });

    test('divides -16 by -31 to be close to 0.516', () => {
      expect(Calculator.divide(-16, -31)).toBeCloseTo(0.516);
    });
  });

  describe('multiplication', () => {
    test('multiplies 67 by 49 to equal 3283', () => {
      expect(Calculator.multiply(67, 49)).toEqual(3283);
    });

    test('multiplies 5 by -10 to equal -50', () => {
      expect(Calculator.multiply(5, -10)).toEqual(-50);
    });

    test('multiplies -16 by -31 to equal 496', () => {
      expect(Calculator.multiply(-16, -31)).toEqual(496);
    });
  });
});
