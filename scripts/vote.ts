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

export async function vote() {
  const proposals = JSON.parse(fs.readFileSync(PROPOSAL_FILE, "utf8"));
  const proposalId = proposals[network.config.chainId!][0];
}
