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
