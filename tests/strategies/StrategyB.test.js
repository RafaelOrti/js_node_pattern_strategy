const StrategyB = require('../src/strategies/StrategyB');

describe('StrategyB', () => {
  it('should execute Strategy B', () => {
    const strategyB = new StrategyB();
    const consoleSpy = jest.spyOn(console, 'log');
    strategyB.execute();
    expect(consoleSpy).toHaveBeenCalledWith('Executing strategy B.');
    consoleSpy.mockRestore();
  });
});
