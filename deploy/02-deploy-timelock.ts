import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { EXECUTORS, MIN_DELAY, PROPOSERS } from "../hardhat-helper-config";

const deployTimeLock: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
};
