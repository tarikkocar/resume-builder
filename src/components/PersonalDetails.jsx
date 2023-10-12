export default function PersonalDetails({ userData, setUserData }) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    const newInfo = { ...userData, [id]: value };
    setUserData(newInfo);
  };

  return (
    <form className="personal-details-form">
      <h2>Personal Details</h2>
      <div className="input-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          value={userData.fullName}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={userData.email}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={userData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={userData.address}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
