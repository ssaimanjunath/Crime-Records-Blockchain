pragma solidity ^0.5.0;

contract ForensicContract {  
  struct CrimeDetails {
        uint crime_id;
        string exhibit_name;
        string desc;
        string timestamp;
        string ipfsHash;
    }
    
    CrimeDetails[] public crime;    

    function addReport(uint _crime_id, string memory _exhibit_name, string memory _desc, string memory _timestamp, string memory _ipfsHash) public returns(uint) {
        crime.length++;
        crime[crime.length-1].crime_id = _crime_id;
        crime[crime.length-1].exhibit_name = _exhibit_name;
        crime[crime.length-1].desc = _desc;
        crime[crime.length-1].timestamp = _timestamp;
        crime[crime.length-1].ipfsHash = _ipfsHash;
        return crime.length;        
    }
    
    function getPatCount() public view returns(uint) {
        return crime.length;
    }
    
    function getPat(uint index) public view returns (uint, string memory, string memory,string memory, string memory)
    {
        return (crime[index].crime_id, crime[index].exhibit_name, crime[index].desc, crime[index].timestamp, crime[index].ipfsHash);
    }
    
    // function getPat2(uint index) public view returns(string memory, uint, string memory, string memory)
    // {
    //     return (crime[index].par_rem, crime[index].fee, crime[index].message, crime[index].ipfsHash);
    // }
}
