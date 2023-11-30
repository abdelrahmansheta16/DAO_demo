import {
  GovernorContract,
  GovernanceToken,
  TimeLock,
  Box,
} from "../../typechain-types";
import { deployments, ethers } from "hardhat";
import { assert, expect } from "chai";
import {
  FUNC,
  DESCRIPTION,
  FUNC_ARGS,
  VOTING_DELAY,
  VOTING_PERIOD,
  MIN_DELAY,
} from "../../hardhat-helper-config";
import { moveBlocks, moveTime } from "../../utils/timetravel";

describe("Governor Flow", async () => {
  let governor: GovernorContract;
  let governanceToken: GovernanceToken;
  let timeLock: TimeLock;
  let box: Box;
  const voteWay = 1; // for
  const reason = "I lika do da cha cha";
  beforeEach(async () => {
    await deployments.fixture(["all"]);
    governor = await ethers.getContract("GovernorContract");
    timeLock = await ethers.getContract("TimeLock");
    governanceToken = await ethers.getContract("GovernanceToken");
    box = await ethers.getContract("Box");
  });

  it("can only be changed through governance", async () => {
    await expect(box.store(55)).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );
  });

  it("proposes, votes, waits, queues, and then executes", async () => {
    // propose
    const encodedFunctionCall = box.interface.encodeFunctionData(FUNC, [
      FUNC_ARGS,
    ]);
  });
});
