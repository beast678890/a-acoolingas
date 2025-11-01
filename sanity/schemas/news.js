export default {
  name: 'news',
  title: 'News / Blog',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'publishedAt', title: 'Published at', type: 'datetime' },
    { name: 'author', title: 'Author', type: 'string' },
    { name: 'coverImage', title: 'Cover image', type: 'image' },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta title', type: 'string' },
        { name: 'metaDescription', title: 'Meta description', type: 'string' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage'
    }
  }
}
