export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'sku', title: 'SKU', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] },
    { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'inventory', title: 'Inventory', type: 'number' },
    { name: 'price', title: 'Price', type: 'number' },
    { name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'string' }] },
    { name: 'sds', title: 'SDS (file)', type: 'file' },
    { name: 'attachments', title: 'Attachments', type: 'array', of: [{ type: 'file' }] },
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
      media: 'images.0'
    }
  }
}
