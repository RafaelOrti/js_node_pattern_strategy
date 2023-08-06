const StrategyC = require('../src/strategies/StrategyC');

describe('StrategyC', () => {
  it('should execute Strategy C with given data', () => {
    const testData = 'some test data';
    const strategyC = new StrategyC(testData);
    const consoleSpy = jest.spyOn(console, 'log');
    strategyC.execute();
    expect(consoleSpy).toHaveBeenCalledWith(`Executing strategy C with data: ${testData}`);
    consoleSpy.mockRestore();
  });

  // Puedes agregar más pruebas aquí para diferentes escenarios de StrategyC
});
