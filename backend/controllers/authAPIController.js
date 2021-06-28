import fetch from 'node-fetch';

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    fetch(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
      method: 'POST',
      body: JSON.stringify({
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: process.env.AUTH0_AUDIENCE,
        grant_type: 'client_credentials'
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        return response.json();
      })
      .then((manAPIResp) => {
        return fetch(`${process.env.AUTH0_AUDIENCE}users/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${manAPIResp.access_token}`
          }
        });
      })
      .then((resp) => {
        if (resp.ok) {
          res.status(resp.status).json(null);
        }
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    fetch(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
      method: 'POST',
      body: JSON.stringify({
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: process.env.AUTH0_AUDIENCE,
        grant_type: 'client_credentials'
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        return response.json();
      })
      .then((manAPIResp) => {
        return fetch(`https://${process.env.AUTH0_DOMAIN}/dbconnections/change_password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${manAPIResp.access_token}`
          },
          body: JSON.stringify({
            client_id: process.env.AUTH0_CLIENT_ID,
            email,
            connection: 'Username-Password-Authentication'
          })
        });
      })
      .then((response) => {
        if (response.ok) {
          res.status(200).json(null);
        }
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

export const getUserMetadata = async (req, res, next) => {
  try {
    const { id } = req.params;

    fetch(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
      method: 'POST',
      body: JSON.stringify({
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: process.env.AUTH0_AUDIENCE,
        grant_type: 'client_credentials'
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        return response.json();
      })
      .then((manAPIResp) => {
        return fetch(`${process.env.AUTH0_AUDIENCE}users/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${manAPIResp.access_token}`
          }
        });
      })
      .then((response) => {
        return response.json();
      })
      .then((userResp) => {
        res.status(200).json({ ...userResp.user_metadata });
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

export const updateUserMetadata = async (req, res, next) => {
  try {
    const { id } = req.params;
    // const { id } = req.params;

    fetch(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
      method: 'POST',
      body: JSON.stringify({
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: process.env.AUTH0_AUDIENCE,
        grant_type: 'client_credentials'
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        return response.json();
      })
      .then((manAPIResp) => {
        return fetch(`${process.env.AUTH0_AUDIENCE}users/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${manAPIResp.access_token}`
          },
          body: JSON.stringify({ ...req.body })
        });
      })
      .then((response) => {
        return response.json();
      })
      .then((userResp) => {
        res.status(201).json(userResp);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};
