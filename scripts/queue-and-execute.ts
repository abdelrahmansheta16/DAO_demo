import { ethers, network } from "hardhat";
import {
  DESCRIPTION,
  developmentChains,
  FUNC,
  FUNC_ARGS,
  MIN_DELAY,
} from "../hardhat-helper-config";
import { moveBlocks, moveTime } from "../utils/timetravel";

export async function queueAndExecute(
  functionToCall: string,
  args: number[],
  proposalDescription: string
) {
  const box = await ethers.getContract("Box");

  const encodedFunctionCall = box.interface.encodeFunctionData(
    functionToCall,
    args
  );
}
