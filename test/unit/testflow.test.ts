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
});
