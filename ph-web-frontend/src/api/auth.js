// save user in DB
export const saveUser = user => {
    const currentUser = {
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
        coin: 50
    }
    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
    // .then(data =>
    //     console.log(data)
    // )
}

// Set coin value through mail
export const setCoinValue = async (email, coinValue) => {
    const currentUser = {
        coin: coinValue
    };

    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
    const data = await response.json()
    return data
};

// Get Single User Coin by Email
export const getCoin = async (email) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`);
    const user = await response.json();
    return user?.coin;
}
