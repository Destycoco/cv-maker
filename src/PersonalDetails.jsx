function PersonalDetails({
  fullName,
  setFullName,
  email,
  setEmail,
  number,
  setNumber,
  address,
  setAddress,
}) {
  return (
    <div className="personal-details">
      <h1>Personal Details</h1>
      <form action="">
        <h3>Full name</h3>
        <input
          type="text"
          placeholder="First and Last Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <h3>
          Email <span className="recommend"> recommended</span>
        </h3>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3>
          Phone number <span className="recommend"> recommended</span>
        </h3>
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <h3>
          Address <span className="recommend"> recommended</span>
        </h3>
        <input
          type="text"
          placeholder="City, Country"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </form>
    </div>
  );
}

export default PersonalDetails;
