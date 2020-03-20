const contentful = require('contentful');
import {CONTENT_SPADE_ID as contentSpaceId, 
  CONTENT_DELIVERY_ACCESS_TOKEN as contentDeliveryAccessToken}  from '../secrets';

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENT_SPADE_ID || contentSpaceId,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENT_DELIVERY_ACCESS_TOKEN || contentDeliveryAccessToken
});

const fetchEntryById = (id) => client.getEntry(id)
  .then((response) => response)
  .catch((error) => console.warn(error));

const fetchEntryByContentIdAndSlug = (id, slug) => client.getEntries({
  content_type: id,
  'fields.slug[in]': slug
})
  .then((response) => response.items[0])
  .catch((error) => console.warn(error));

const fetchEntriesForContentId = (id) => client.getEntries({
  content_type: id
})
  .then((response) => response.items)
  .catch((error) => console.warn(error));

export const getEntry = (id) => fetchEntryById(id);
export const getPost = (slug) => fetchEntryByContentIdAndSlug('post', slug);
export const getPosts = () => fetchEntriesForContentId('post');
export const getStory = (slug) => fetchEntryByContentIdAndSlug('story', slug);
export const getStories = () => fetchEntriesForContentId('story');
export const getPage = (slug) => fetchEntryByContentIdAndSlug('page', slug);