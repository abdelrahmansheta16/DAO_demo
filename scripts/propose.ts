import { ethers, network } from "hardhat";
import {
  developmentChains,
  VOTING_DELAY,
  PROPOSAL_FILE,
  FUNC_ARGS,
  FUNC,
  DESCRIPTION,
} from "../hardhat-helper-config";
import * as fs from "fs";
import { moveBlocks } from "../utils/timetravel";

export async function makeProposal(
  functionToCall: string,
  args: number[],
  proposalDescription: string
) {
  const governor = await ethers.getContract("GovernorContract");
  const box = await ethers.getContract("Box");

  const encodedFunctionCall = box.interface.encodeFunctionData(
    functionToCall,
    args
  );

  console.log("Function to call: ", functionToCall);
  console.log("Args: ", args);
  console.log("Encoded Function Call: ", encodedFunctionCall);
  console.log("Proposal Description: ", proposalDescription);

  const proposeTx = await governor.propose(
    [box.address],
    [0],
    [encodedFunctionCall],
    proposalDescription
  );

  const proposeReceipt = await proposeTx.wait(1);

  // Speed up time so we can vote!
  if (developmentChains.includes(network.name)) {
    await moveBlocks(VOTING_DELAY + 1);
  }
}
