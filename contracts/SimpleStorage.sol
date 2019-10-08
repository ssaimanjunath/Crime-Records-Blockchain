pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract SimpleStorage {  
  struct CrimeDetails {
        uint crime_id;
        string timestamp;
        string offense_code;
        string description;        
    }
    
    CrimeDetails[] public crime;    

    function addCrimeReport(uint _crime_id, string memory _timestamp, string memory _offense_code, string memory _description) public returns(uint) {
        crime.length++;
        crime[crime.length-1].crime_id = _crime_id;
        crime[crime.length-1].timestamp = _timestamp;
        crime[crime.length-1].offense_code = _offense_code;
        crime[crime.length-1].description = _description;
        return crime.length;        
    }
    
    function getCrimeCount() public view returns(uint) {
        return crime.length;
    }
    
    function getCrimeBlock(uint index) public view returns (uint, string memory, string memory, string memory)
    {
        return (crime[index].crime_id, crime[index].timestamp, crime[index].offense_code, crime[index].description);
    }
    function getAllCrimeDetails() public view returns (CrimeDetails[] memory)
    {
        CrimeDetails[] memory id = new CrimeDetails[](crime.length);
        for (uint i = 0; i < crime.length; i++) {
            CrimeDetails storage tempCrime = crime[i];
            id[i] = tempCrime;
        }
        return id;
    }
}
