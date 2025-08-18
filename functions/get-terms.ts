import { createClient, Entry, EntryCollection } from "contentful";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error("Missing Contentful environment variables: CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN");
}

export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export const getTerm = async (slug: string): Promise<Entry<any> | undefined> => {
  const entries: EntryCollection<any> = await client.getEntries({
    content_type: "terms",
    "fields.link": slug,
    limit: 1,
  });
  return entries.items[0];
};
