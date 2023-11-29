import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployGovernanceToken: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  log("Deploying Governance Token....");
  const governanceToken = await deploy("GovernanceToken", {
    from: deployer,
    log: true,
    args: [],
    // waitConfirmations: 1, // For non-dev netwworks so we can verify
  });
};

