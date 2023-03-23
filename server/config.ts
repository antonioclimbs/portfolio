import dotenv from "dotenv";

export interface Config {
  PORT: string;
  DB_HOST: string;
  DB_PORT: number;
}

export const PORT = "PORT";
export const DB_HOST = "DB_HOST";
export const DB_PORT = "DB_PORT";

const mustEnvValue = (key: string) => {
  if (!process.env[key]) throw new Error(`missing env value ${key}`);
};

export const getENVValue = (key: string): string => {
  mustEnvValue(key);
  return process.env[key] ?? "";
};

export const getENVValueNumber = (key: string): number => {
  mustEnvValue(key);
  const val = process.env[key];
  if (!val || isNaN(Number(val)))
    throw new Error(`${key} ${val} is not a valid number`);
  return Number(process.env[key]);
};

export const newConfig = (): Config => {
  dotenv.config();
  return {
    PORT: getENVValue(PORT),
    DB_HOST: getENVValue(DB_HOST),
    DB_PORT: getENVValueNumber(DB_PORT),
  };
};
