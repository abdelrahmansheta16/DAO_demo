// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorSettings.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorTimelockControl.sol";

contract GovernorContract is
	Governor,
	GovernorSettings,
	GovernorCountingSimple,
	GovernorVotes,
	GovernorVotesQuorumFraction,
	GovernorTimelockControl
{
	constructor(
		IVotes _token,
		TimelockController _timelock,
		uint256 _votingDelay,
		uint256 _votingPeriod,
		uint256 _quorumPercentage
	)
		Governor("GovernorContract")
		GovernorSettings(
			_votingDelay, /* 1 block */
			_votingPeriod, // 45818, /* 1 week */
			0 // proposal threshold
		)
		GovernorVotes(_token)
		GovernorVotesQuorumFraction(_quorumPercentage)
		GovernorTimelockControl(_timelock)
	{}

	// The following functions are overrides required by Solidity.

	function votingDelay()
		public
		view
		override(IGovernor, GovernorSettings)
		returns (uint256)
	{
		return super.votingDelay();
	}

	function votingPeriod()
		public
		view
		override(IGovernor, GovernorSettings)
		returns (uint256)
	{
		return super.votingPeriod();
	}
}
