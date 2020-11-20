import {FB_PAGE_ID, FB_ACCESS_TOKEN} from '../secrets';

export const pageId = process.env.FB_PAGE_ID || FB_PAGE_ID;
export const accessToken = process.env.FB_ACCESS_TOKEN || FB_ACCESS_TOKEN;