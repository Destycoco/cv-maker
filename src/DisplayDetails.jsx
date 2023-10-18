import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
function DisplayDetails({ testUser }) {
  return (
    <div className="display-details">
      <h1>{testUser.fullName}</h1>
      <div className="contacts-info">
        <h2>
          {testUser.email && <IoMail size={30} />} {testUser.email}
        </h2>
        <h2>
          {testUser.number && <IoCall size={30} />} {testUser.number}
        </h2>
        <h2>
          {testUser.address && <FaLocationDot size={30} />} {testUser.address}
        </h2>
      </div>
    </div>
  );
}

export default DisplayDetails;
