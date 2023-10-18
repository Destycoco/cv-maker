function PersonalDetails({ user, setUser }) {
  const handleFullNameChange = (e) => {
    setUser({
      ...user,
      fullName: e.target.value,
    });
  };
  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  const handleNumberChange = (e) => {
    setUser({ ...user, number: e.target.value });
  };
  const handleAddressChange = (e) => {
    setUser({ ...user, address: e.target.value });
  };
  return (
    <div className="personal-details">
      <h1>Personal Details</h1>
      <form action="">
        <h3>Full name</h3>
        <input
          type="text"
          placeholder="First and Last Name"
          value={user.fullName}
          onChange={handleFullNameChange}
        />
        <h3>
          Email <span className="recommend"> recommended</span>
        </h3>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={user.email}
          onChange={handleEmailChange}
        />
        <h3>
          Phone number <span className="recommend"> recommended</span>
        </h3>
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={user.number}
          onChange={handleNumberChange}
        />
        <h3>
          Address <span className="recommend"> recommended</span>
        </h3>
        <input
          type="text"
          placeholder="City, Country"
          value={user.address}
          onChange={handleAddressChange}
        />
      </form>
    </div>
  );
}

export default PersonalDetails;
