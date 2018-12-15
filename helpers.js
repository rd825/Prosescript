function create(user_id, access_token, mailObj) {
    axios({
        method: 'post',
        url: `https://api.medium.com/v1/users/${user_id}/posts`,
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        },
        data: {
            "contentFormat": "html", // or Markdown
            "title": mailObj.title,
            "content": mailObj.html,
            "publishStatus": "public",
            "notifyFollowers": true,
        }
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};

function refresh(refresh_token, client_id, client_secret) {
    axios({
        method: 'post',
        url: 'https://api.medium.com/v1/tokens',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        },
        data: `refresh_token=${refresh_token}&client_id=${client_id}
        &client_secret=${client_secret}&grant_type=refresh_token`
    })
    .then(res => {
        // update access token in DB
        // then return the raw access token to pass to create function
        //accessT = cryptr.encrypt(access_token);

    }) 
    .catch(err => console.log(err));
}