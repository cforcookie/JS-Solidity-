pragma solidity <=0.8.7;

contract module1 {
    
    struct Transact {
        uint transact_id;
        uint date;
        address giver;
        address taker;
        uint money;
        bytes32 code_word;
        string category;
        string discripcion;
        bool status;
    }
    
    struct Sample {
        string sample_category;
        uint money;
    }
    
    struct Vote {
        uint admins_votes;
        bool admin_status;
        bool status_vote;
    }
    
    uint public admin_count = 0;
    
    mapping(address => bytes32) public user;
    mapping(address => bool) public admin_status;
    mapping(string => Sample) public samples;
    mapping(address => Vote) public vote;
    
    string[] public categores;
    Transact[] public transacts;
    
    constructor () public {
        //admins
        user[0x5B38Da6a701c568545dCfcB03FcB875f56beddC4] = bytes32(keccak256(abi.encodePacked("1234")));
        admin_status[0x5B38Da6a701c568545dCfcB03FcB875f56beddC4] = true;
        admin_count++;
        user[0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2] = bytes32(keccak256(abi.encodePacked("1234")));
        admin_status[0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2] = true;
        admin_count++;
        //users
        user[0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c] = bytes32(keccak256(abi.encodePacked("1234")));
        user[0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c] = bytes32(keccak256(abi.encodePacked("1234")));
        user[0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB] = bytes32(keccak256(abi.encodePacked("1234")));
        user[0x617F2E2fD72FD9D5503197092aC168c91465E7f2] = bytes32(keccak256(abi.encodePacked("1234")));
        //category
        categores.push("Personal translation");
        categores.push("Payment of rental housing");
        categores.push("Personal settlements");
        //samples
        samples["present10"] = Sample("Personal translation", 10);
        samples["present30"] = Sample("Personal translation", 30);
        samples["present50"] = Sample("Personal translation", 50);
        
        samples["rent70"] = Sample("Payment of rental housing", 70);
        samples["rent90"] = Sample("Payment of rental housing", 90);
        
        samples["debt100"] = Sample("Personal settlements", 100);
        
    }
    
    function register_user(string memory password) public {
        require(user[msg.sender] == 0x0000000000000000000000000000000000000000000000000000000000000000, "You allready in system");
        user[msg.sender] = bytes32(keccak256(abi.encodePacked(password)));
        admin_status[msg.sender] = false;
    }
    
    function create_vote(address user) public {
        require(admin_status[msg.sender] == true, "Only admin can create vote.");
        require(msg.sender != user, "You can't create vote to yourself.");
        if (admin_status[user] == false) {
            vote[user] = Vote(admin_count, false, true);
        }
        else {
            vote[user] = Vote(admin_count, true, true);
        }
    }
    
    function admins_vote(address user, bool anser) public {
        require(admin_status[msg.sender] == true, "Only admin can vote.");
        require(vote[user].status_vote == true, "Vote is end.");
        if (anser == true) {
            vote[user].admins_votes -= 1;
        }
        else {
            vote[user].status_vote = false;
        }
        if (vote[user].admins_votes == 0) {
            if (vote[user].admin_status == true) {
                admin_status[user] = false;
                vote[user].status_vote = false;
                admin_count--;
            }
            else {
                admin_status[user] = true;
                vote[user].status_vote = false;
                admin_count++;
            }
        }
        
        
    }
    
    function create_transact(address taker, uint money, string memory code_word, string memory category, string memory discripcion) public payable{
        require(msg.sender.balance > 0, "Error, your balance less or equals to zero");
        require(msg.sender.balance > money * 10**18, "Error, your balance less ;then your transfer");
        bytes32 code_word = bytes32(keccak256(abi.encodePacked(code_word)));
        uint number = transacts.length;
        transacts.push(Transact(number, block.timestamp/86400, msg.sender, taker, money * 10**18, code_word, category, discripcion, true));
        value_taker(number);
        require(msg.value == transacts[number].money);
        
    }
    
    function create_transact_category(string memory sample, address taker, string memory code_word, string memory discripcion) public payable{
        require(msg.sender.balance > 0, "Error, your balance less or equals to zero");
        require(msg.sender.balance > samples[sample].money * 10**18, "Error, your balance less ;then your transfer");
        require(msg.value == samples[sample].money * 10**18);
        bytes32 code_word = bytes32(keccak256(abi.encodePacked(code_word)));
        transacts.push(Transact(transacts.length, block.timestamp/86400, msg.sender, taker, samples[sample].money * 10**18, code_word, samples[sample].sample_category, discripcion, true));
    }
    
    function confirm_transact(uint transact_id, string memory code_word) public payable{
        require(transacts[transact_id].status == true, "Transact is end.");
        require(transacts[transact_id].taker == msg.sender, "That not for you, boddy.");
        bytes32 anser = bytes32(keccak256(abi.encodePacked(code_word)));
        if (transacts[transact_id].code_word == anser) {
            payable(msg.sender).transfer(transacts[transact_id].money);
        }
        else {
            transacts[transact_id].status = false;
        }
    }
    
    function canel_transfer(uint transact_id) public {
        require(msg.sender == transacts[transact_id].giver, "You not transfer giver.");
        require(transacts[transact_id].status == true, "Transfer complite or not exist");
        transacts[transact_id].status == false;
    }
    
    function create_category(string memory category) public {
        require(admin_status[msg.sender] == true, "Only admin can create category.");
        categores.push(category);
    }
    
    function value_taker(uint transact_id) private {
        require(transacts[transact_id].money == msg.value, "Your balance less.");
    }
    
}