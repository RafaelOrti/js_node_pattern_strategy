import { StrategyA, StrategyB, StrategyC } from './src/strategies';
import { ContextController } from './src/controllers';

const contextController = new ContextController(new StrategyA());
contextController.executeStrategy();

contextController.setStrategy(new StrategyB());
contextController.executeStrategy();

contextController.setStrategy(new StrategyC());
contextController.executeStrategy();
