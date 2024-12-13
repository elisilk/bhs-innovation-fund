import * as contentful from 'contentful'
import type { EntryFieldTypes } from "contentful";

export interface Faculty {
  contentTypeId: "faculty",
  fields: {
    name: EntryFieldTypes.Text,
    department: EntryFieldTypes.Text,
    firstName: EntryFieldTypes.Text,
    lastName: EntryFieldTypes.Text,
    preferredFirstName: EntryFieldTypes.Text,
  }
}

export interface Program {
  contentTypeId: "program",
  fields: {
    name: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    year: EntryFieldTypes.Date,
    description: EntryFieldTypes.Text,
    coverImageSrc: EntryFieldTypes.Text,
    coverImageAlt: EntryFieldTypes.Text,
    faculty: EntryFieldTypes.Array<contentful.EntryFieldTypes.EntryLink<Faculty>>,
    content: EntryFieldTypes.RichText,
    isActive: EntryFieldTypes.Boolean,
    isCurrentlyFunded: EntryFieldTypes.Boolean,
    featuredOnHomepage: EntryFieldTypes.Boolean,
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});