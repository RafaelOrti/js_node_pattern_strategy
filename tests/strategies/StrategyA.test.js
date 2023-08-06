const StrategyA = require('../src/strategies/StrategyA');

describe('StrategyA', () => {
  it('should execute Strategy A', () => {
    const strategyA = new StrategyA();
    const consoleSpy = jest.spyOn(console, 'log');
    strategyA.execute();
    expect(consoleSpy).toHaveBeenCalledWith('Executing strategy A.');
    consoleSpy.mockRestore();
  });
});
