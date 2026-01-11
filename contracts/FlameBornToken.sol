// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

// Core upgradeable contracts
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

// Access control
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";

// ERC20 core and extensions
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PermitUpgradeable.sol";

contract FlameBornToken is 
    Initializable,
    ERC20Upgradeable,
    ERC20BurnableUpgradeable,
    ERC20PausableUpgradeable,
    OwnableUpgradeable,
    AccessControlUpgradeable,
    ERC20PermitUpgradeable,
    UUPSUpgradeable
{
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    uint8 private constant _DECIMALS = 18;
    uint256 private constant _INITIAL_SUPPLY = 1_000_000 * (10 ** _DECIMALS);

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(address initialOwner) public initializer {
        require(initialOwner != address(0), "Invalid owner");

        __ERC20_init("FlameBornToken", "FLB");
        __ERC20Burnable_init();
        __ERC20Pausable_init();
        __Ownable_init(initialOwner);
        __AccessControl_init();
        __ERC20Permit_init("FlameBornToken");
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, initialOwner);
        _mint(initialOwner, _INITIAL_SUPPLY);
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) external {
        require(
            msg.sender == owner() || hasRole(MINTER_ROLE, msg.sender),
            "Not authorized to mint"
        );
        require(to != address(0), "Mint to zero address");
        _mint(to, amount);
    }

    function grantMinterRole(address account) external onlyOwner {
        require(account != address(0), "Invalid address");
        _grantRole(MINTER_ROLE, account);
    }

    function revokeMinterRole(address account) external onlyOwner {
        _revokeRole(MINTER_ROLE, account);
    }

    function isMinter(address account) external view returns (bool) {
        return hasRole(MINTER_ROLE, account) || account == owner();
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyOwner
        override
    {}

    function _update(address from, address to, uint256 value)
        internal
        override(ERC20Upgradeable, ERC20PausableUpgradeable)
    {
        super._update(from, to, value);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(AccessControlUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
