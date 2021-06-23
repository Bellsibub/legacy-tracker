import fetch from 'node-fetch';

export const getUserLegacies = async (req, res, next) => {
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

export const addLegacyToUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { legacyID } = req.body;

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
          body: JSON.stringify({ user_metadata: { legacy: legacyID } })
        });
      })
      .then((response) => {
        return response.json();
      })
      .then((userResp) => {
        res.status(200).json(userResp);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

export const removeLegacyForUser = async (req, res, next) => {
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
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${manAPIResp.access_token}`
          },
          body: JSON.stringify({ user_metadata: { legacy: null } })
        });
      })
      .then((response) => {
        return response.json();
      })
      .then((userResp) => {
        res.status(200).json(userResp);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};
