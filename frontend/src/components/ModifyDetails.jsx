import {useState} from "react";
import style from "/src/css/add-post.module.css";
import {addUserDetails} from "../services/UserService.jsx";

const ModifyDetails = ({ messages }) => {

    // const userDetails = {
    //     firstName: "John",
    //     lastName: "Doe",
    //     city: "New York",
    //     streetName: "5th Avenue",
    //     streetAddress: "123",
    //     postalCode: "10001",
    //     state: "NY",
    //     country: "USA",
    // };

    const [fistName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [streetName, setStreetName] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");


    function addDetails(e){
        e.preventDefault();

        const userDetails = {
            fistName,
            lastName,
            city,
            streetName,
            streetAddress,
            postalCode,
            state,
            country,
        }
        console.log(userDetails);

        addUserDetails(userDetails).then((response) => {
            console.log(userDetails);
            console.log(response.data);
            //navigate(`/postpage/${post.idPost}`);

        });

    }

    return (
        <main>
            <div className={style.header}>
                <div>
                    <h1 className={style["welcome-text"]}>Modify Your Details</h1>
                </div>
            </div>

            <section className={style.section}>
                <form>
                    {/* Display Messages */}
                    <span className={style.messages}>
            {messages &&
                messages.map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
          </span>

                    {/* Form Inputs */}
                    <input
                        type="text"
                        className={style["input-text"]}
                        placeholder="First name"
                        name="first_name"
                        value={fistName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        className={style["input-text"]}
                        placeholder="Last name"
                        name="last_name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <h4></h4>
                    <input
                        type="text"
                        className={style["input-text"]}
                        placeholder="City"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <input
                        type="text"
                        className={style["input-text"]}
                        placeholder="Street name"
                        name="street_name"
                        value={streetName}
                        onChange={(e) => setStreetName(e.target.value)}
                    />
                    <input
                        type="text"
                        className={style["input-text"]}
                        placeholder="Street number"
                        name="street_address"
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                    />
                    <input
                        type="text"
                        className={style["input-text"]}
                        placeholder="Postal code"
                        name="postal_code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                    <input
                        type="text"
                        className={style["input-text"]}
                        placeholder="State"
                        name="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                    <input
                        type="text"
                        className={style["input-text"]}
                        placeholder="Country"
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />

                    {/* Submit Button */}
                    <button onClick={addDetails} className={style["input-text"]}>
                        Submit
                    </button>
                </form>
            </section>
        </main>
    );
};

export default ModifyDetails;
