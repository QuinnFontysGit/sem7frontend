import React, { useState } from "react";
import api from "../../api/axios"
import Cookies from "js-cookie";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [qrCode, setQrCode] = useState(null);
    const [userId, setUserId] = useState(null);
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [step, setStep] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const csrfToken = Cookies.get('csrftoken');
        if (!csrfToken) {
            console.error('CSRF token not found.');
            console.log(csrfToken);
            console.log(document.cookie);
            return
        }
        
        if (step === 1) {
            try {
                const response = await api.post("register/", { username, password, email, address, first_name, last_name },
                    {headers: {'X-CSRFToken': csrfToken, }}
                );
                console.log(response);
                setQrCode(response.data.qr_code); 
                setUserId(response.data.user_id);  
                setStep(2); 
            } catch (err) {
                setError(err.response?.data?.error || "Registration failed.");
            }
        } else if (step === 2) {
            try {
                await api.post("verify-totp-setup/", { user_id: userId, otp });
                window.location.href = "/login"; 
            } catch (err) {
                setError(err.response?.data?.error || "Verification failed.");
            }
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div>
                        <input type="text" placeholder="Username" value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                        <input type="email" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="password" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        /> <br/>
                        <input type="text" placeholder="Address" value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                        <input type="text" placeholder="First name" value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input type="text" placeholder="Last name" value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                        <button type="submit">Register</button>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <h3>Scan this QR code with your authenticator app:</h3>
                        <img src={qrCode} alt="Could not load QR code" />
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <button type="submit">Verify TOTP</button>
                    </div>
                )}
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Register;
