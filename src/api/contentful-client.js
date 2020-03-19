const contentful = require('contentful');
import {contentfulSpaceId, contentfulToken}  from '../secrets';

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: contentfulSpaceId,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: contentfulToken
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