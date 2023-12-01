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

  const descriptionHash = ethers.utils.keccak256(
    ethers.utils.toUtf8Bytes(proposalDescription)
  );
  // could also use ethers.utils.id(PROPOSAL_DESCRIPTION)

  const governor = await ethers.getContract("GovernorContract");
  const queueTx = await governor.queue(
    [box.address],
    [0],
    [encodedFunctionCall],
    descriptionHash
  );
  queueTx.wait(1);

  console.log("Proposal queued....");

  // Forward past MIN_DELAY
  if (developmentChains.includes(network.name)) {
    await moveTime(MIN_DELAY + 1);
    await moveBlocks(1);
  }
}
