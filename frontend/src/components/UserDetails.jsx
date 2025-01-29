import React, {useEffect, useState} from "react";
import style from "/src/css/my-profile.module.css";
import {getSessionUser, getUserDetails} from "../services/UserService.jsx";

const Profile = () => {

    const [userDetails, setUserDetails] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserDetails().then((response) => {
            setUserDetails(response.data);
        }).catch((error) => {
            console.error(error);
        })
    }, []);


    useEffect(() => {
        getSessionUser().then((response) => {
            setUser(response.data);
        }).catch((error) => {
            console.error(error);
        })
    }, []);


    return (
        <>
            <div className="header">
                <div>
                    <h1 className={"welcome-text"}>My Profile</h1>
                </div>
            </div>
        <main id="profile">
            <section className={style.details}>
                {/* User Account Details */}
                <div className={`${style.user} ${style.details}`}>
                    <h3>Your Account</h3>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    {/*<a href="changeusername" className={`"button" ${style.details}`}>*/}
                    {/*    Change Username*/}
                    {/*</a>*/}
                    {/*<a href="changeemail" className={`"button" ${style.details}`}>*/}
                    {/*    Change Email*/}
                    {/*</a>*/}
                    {/*<a href="changepassword" className={`"button" ${style.details}`}>*/}
                    {/*    Change Password*/}
                    {/*</a>*/}
                </div>

                {/* User Additional Details */}
                <div className={`${style.userdetails} ${style.details}`}>
                    {!userDetails ? (
                        <>
                            <p>Your account doesn&#39;t have details</p>
                            <a href="adddetails" className={`"button" ${style.details}`}>
                                Add Details
                            </a>
                        </>
                    ) : (
                        <>
                            <h3>Your Details</h3>
                            <p>First Name: {userDetails.firstName}</p>
                            <p>Last Name: {userDetails.lastName}</p>
                            <p>City: {userDetails.city}</p>
                            <p>Street: {userDetails.streetName}</p>
                            <p>Street Num: {userDetails.streetAddress}</p>
                            <p>Postal Code: {userDetails.postalCode}</p>
                            <p>State: {userDetails.state}</p>
                            <p>Country: {userDetails.country}</p>
                            <a href="adddetails" className={`"button" ${style.details}`}>
                                Add/Change Details
                            </a>
                        </>
                    )}
                </div>
            </section>
        </main>
        </>
    );
};

export default Profile;
