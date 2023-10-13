function PersonalDetails() {
  return (
    <div className="personal-details">
      <h1>Personal Details</h1>
      <form action="">
        <h3>Full name</h3>
        <input type="text" />
        <h3>
          Email <span className="recommend"> recommended</span>
        </h3>
        <input type="email" />
        <h3>
          Phone number <span className="recommend"> recommended</span>
        </h3>
        <input type="text" />
        <h3>
          Address <span className="recommend"> recommended</span>
        </h3>
        <input type="text" />
      </form>
    </div>
  );
}

export default PersonalDetails;
