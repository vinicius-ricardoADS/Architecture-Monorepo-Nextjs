import type { Config } from "@jest/types";
import path from "path";

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  verbose: true,
  transform: {
    '\\.[jt]sx?$': ['babel-jest', {
      configFile: path.resolve(__dirname, '.babelrc'),
    }],
  }
}

export default config;
