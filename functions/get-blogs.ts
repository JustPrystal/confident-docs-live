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

export const getBlogs = async (
  page: number = 1,
  limit: number = 10,
  category: string | null = null,
  excludeSlug: string | null = null
): Promise<{
  items: Entry<any>[];
  total: number;
}> => {
  let query: any = {
    content_type: "article",
    limit: limit + (excludeSlug ? 1 : 0),
    skip: (page - 1) * limit,
    order: "-fields.createdDate",
  };

  if (category && category !== "all") {
    const capitalizedCategory =
      category.charAt(0).toUpperCase() + category.slice(1);
    query["fields.category"] = capitalizedCategory;
  }

  const entries: EntryCollection<any> = await client.getEntries(query);

  let items: Entry<any>[] = entries.items;
  if (excludeSlug) {
    items = items.filter(item => item.fields.link !== excludeSlug);
    items = items.slice(0, limit);
  }

  return {
    items,
    total: entries.total - (excludeSlug ? 1 : 0),
  };
};

export const getBlog = async (slug: string): Promise<Entry<any> | undefined> => {
  const entries: EntryCollection<any> = await client.getEntries({
    content_type: "article",
    "fields.link": slug,
    limit: 1,
  });
  return entries.items[0];
};
