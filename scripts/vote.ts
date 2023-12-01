import { ethers, network } from "hardhat";
import {
  developmentChains,
  PROPOSAL_FILE,
  VOTE_REASON,
  VOTING_PERIOD,
} from "../hardhat-helper-config";
import * as fs from "fs";
import { moveBlocks } from "../utils/timetravel";

const index = 0;
const VOTE_NO = 0;
const VOTE_YES = 1;
const VOTE_ABSTAIN = 2;
