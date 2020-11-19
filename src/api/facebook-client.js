import {FB_PAGE_ID as pageId,
    FB_ACCESS_TOKEN as accessToken} from '../secrets';

export async function getPost(id) {
}


export async function getPosts() {
    const res = await fetch(`https://graph.facebook.com/${pageId}/posts?access_token=${accessToken}`);
    if (!res.ok) throw res;
    return await res.json();
}