/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-underscore-dangle */
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
        // Get a JSON object from the response
        // This is a weird quirk of Fetch
        return response.json();
      })
      .then((manAPIResp) => {
        // Log the data to the console
        // console.log(manAPIResp);

        // Cache the data to a variable
        // posts = data;

        // Make another API call and pass it into the stream
        return fetch(`${process.env.AUTH0_AUDIENCE}users/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${manAPIResp.access_token}`
          }
          // body: JSON.stringify({ user_metadata: { legacies: legacyID } })
        });
      })
      .then((response) => {
        // Get a JSON object from the response
        return response.json();
      })
      .then((userResp) => {
        // Log the data to the console
        // console.log(userResp);

        // Cache the data to a variable
        // users = data;
        res.status(200).json({ ...userResp.user_metadata });
        // Now that you have both APIs back, you can do something with the data
      })
      .catch((error) => {
        // if there's an error, log it
        next(error);
      });
    // res.status(200).json(doc);
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
        // Get a JSON object from the response
        // This is a weird quirk of Fetch
        return response.json();
      })
      .then((manAPIResp) => {
        // Log the data to the console
        // console.log(manAPIResp);

        // Cache the data to a variable
        // posts = data;

        // Make another API call and pass it into the stream
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
        // Get a JSON object from the response
        return response.json();
      })
      .then((userResp) => {
        // Log the data to the console
        // console.log(userResp);

        // Cache the data to a variable
        // users = data;
        res.status(200).json(userResp);
        // Now that you have both APIs back, you can do something with the data
      })
      .catch((error) => {
        // if there's an error, log it
        next(error);
      });
    // res.status(200).json(doc);
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
        // Get a JSON object from the response
        // This is a weird quirk of Fetch
        return response.json();
      })
      .then((manAPIResp) => {
        // Log the data to the console
        // console.log(manAPIResp);

        // Cache the data to a variable
        // posts = data;

        // Make another API call and pass it into the stream
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
        // Get a JSON object from the response
        return response.json();
      })
      .then((userResp) => {
        // Log the data to the console
        // console.log(userResp);

        // Cache the data to a variable
        // users = data;
        res.status(200).json(userResp);
        // Now that you have both APIs back, you can do something with the data
      })
      .catch((error) => {
        // if there's an error, log it
        next(error);
      });
    // res.status(200).json(doc);
  } catch (error) {
    next(error);
  }
};